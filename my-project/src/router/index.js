import { createRouter, createWebHistory } from "vue-router";
import profile from "../views/profile.vue";
import authPage from "../views/auth-page.vue";
import stats from "../views/stats.vue";

const routes = [
  {
    path: "/",
    name: "authPage",
    component: authPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
  {
    path: "/stats",
    name: "stats",
    component: stats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
