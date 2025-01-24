import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import SupplierView from '../views/Supplier.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },

        {
            path: '/supplier',
            name: 'Supplier',
            component: SupplierView,
        },

        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },

    ],
});

export default router;