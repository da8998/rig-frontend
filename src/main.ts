import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router/router";
import { isAuthenticated } from "./auth/auth";

createApp(App).use(router).mount("#app");

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await isAuthenticated()) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (await isAuthenticated()) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});
