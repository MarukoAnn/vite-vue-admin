import axios, {AxiosRequestConfig, Method} from "axios";
const CancelToken = axios.CancelToken;
interface PendingType {
    url?: string;
    method?: string;
    params?: any;
    data?: any;
    cancel: Function;
}
const pending: Array<PendingType> = [];
// 全局的请求次数，请求的间隙，超时重新请求
const  [RETRY_COUNT, RETRY_DELAY] = [3, 1000]
const instance = axios.create({
    timeout: 100000,
    responseType: 'json',
})

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for(const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在执行函数体
        if(list.url == config.url && list.method === config.method
            && JSON.stringify(list.params) === JSON.stringify(config.params) && 
            JSON.stringify(list.data) === JSON.stringify(config.data)){
                // 执行取消操作
                list.cancel('操作太平凡，请稍后再试')
                // 从数组中移除记录
                pending.splice(item, 1)
            }
    }
}

// 请求拦截
instance.interceptors.request.use(request => {
    
    removePending(request)
    request.cancelToken = new CancelToken((c) => {
        pending.push({
            url: request.url,
            method: request.method,
            params: request.params,
            data: request.data,
            cancel: c
        })
    })
    return request
},  error => {
    return Promise.reject(error);
})

// 相应拦截
instance.interceptors.response.use(response => {
    return response;
}, error => {
    const response = error.response;
    // 根据返回的http状态码做不同的处理
    switch(response?.status) {

    }

    // 超时重新请求
    const config = error.config;
    
    if(config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0;
        // 检查是否已经把重试的次数用完
        if(config.__retryCount >= RETRY_COUNT) {
            return Promise.reject(response || {message: error.response})
        }
        // 增加重试计数
        config.__retryCount ++;
        // 创造新的Promise来处理数据后退
        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, RETRY_DELAY || 1);
        })
        return backoff.then(() => {
            return instance(config);
        })
    }
})