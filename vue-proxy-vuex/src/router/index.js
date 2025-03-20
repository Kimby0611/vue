import GatteRs from "@/components/GatteRs.vue";
import HomePage from "@/components/HomePage.vue";
import StoreAccess from "@/components/StoreAccess.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/storeacc", component: StoreAccess },
  { path: "/storeget", component: GatteRs },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
