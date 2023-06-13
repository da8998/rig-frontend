import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import Login from "../components/account/Login.vue";
import Register from "../components/account/Register.vue";

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
            name: "Register",
            component: Register,
            path: "/register",
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