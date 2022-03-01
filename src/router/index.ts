import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routers:RouteRecordRaw[] = [
    {
        path: '/', 
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../pages/login/login.vue')
    },
    {
        path: '/home',
        component: () => import('../pages/home/home.vue')
    }
];


const router = createRouter({
    routes: routers,
    history: createWebHashHistory()
})

export default router;