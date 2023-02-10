import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/webapp/:chat',
            name: 'webApp',
            component: () => import('../views/WebApp.vue')
        },
        {
            path: '/webapp/:chat/products',
            name: 'productsPage',
            component: () => import('../views/pages/ProductsPage.vue')
        },
        {
            path: '/webapp/:chat/products/:product',
            name: 'productDetailPage',
            component: () => import('../views/pages/ProductDetailPage.vue')
        },
        {
            path: '/webapp/:chat/trolley',
            name: 'trolleyPage',
            component: () => import('../views/pages/TrolleyPage.vue')
        },
        {
            path: '/webapp/:chat/shippment',
            name: 'shippmentPage',
            component: () => import('../views/pages/ShipmentPage.vue')
        }
    ]
});

export default router;