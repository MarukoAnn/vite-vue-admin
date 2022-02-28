export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json'| 'text' | 'stream'

export interface AxiosRequest {
    baseUrl?: string;
    url: string;
    data?: string;
    params?: string
    method?: string;
    headers?: string;
    timeout?: number;
    responseType?: ResponseType;
}

export interface AxiosResponse {
    data: any;
    headers?: any;
    request: any;
    status: number;
    statusText: string;
    config: AxiosRequest;
}

export interface CustomAxiosRequest {
    readonly status: number;
    readonly message: string;
    data?: any;
    origin?: any;
}

export interface getDemo {
    id: number;
    str: string;
}