import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routers:RouteRecordRaw[] = [
    {
        path: '/', 
        redirect: '/home'
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