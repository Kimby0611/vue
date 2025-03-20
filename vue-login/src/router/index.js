import { createRouter, createWebHistory } from "vue-router";
import KakaoLogin from "@/components/KakaoLogin.vue";
import HomePage from "@/components/HomePage.vue";
import NaverLogin from "@/components/NaverLogin.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/kakaologin", component: KakaoLogin },
  { path: "/naverlogin", component: NaverLogin },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
