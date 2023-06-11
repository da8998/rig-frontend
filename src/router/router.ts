import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import Login from "../components/account/Login.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Login",
            component: Login,
            path: "/login",
            meta: {
                guest: true
            }
        },
        {
            name: "Dashboard",
            component: Dashboard,
            path: "/",
            meta: {
                requiresAuth: true
            }
        }
    ]
});