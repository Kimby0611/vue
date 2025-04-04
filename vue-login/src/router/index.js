import { createRouter, createWebHistory } from "vue-router";
import KakaoLogin from "@/components/KakaoLogin.vue";
import HomePage from "@/components/HomePage.vue";
import NaverLogin from "@/components/NaverLogin.vue";
import GoogleLogin from "@/components/GoogleLogin.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/kakaologin", component: KakaoLogin },
  { path: "/naverlogin", component: NaverLogin },
  { path: "/googlelogin", component: GoogleLogin },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
