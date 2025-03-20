import CalculaTor from "@/components/CalculaTor.vue";
import ComponentAPI4 from "@/components/ComponentAPI4.vue";
import CompositionAPI from "@/components/CompositionAPI.vue";
import CompositionAPI2 from "@/components/CompositionAPI2.vue";
import CompositionAPI3 from "@/components/CompositionAPI3.vue";
import CompostionAPIProvide from "@/components/CompostionAPIProvide.vue";
import CustomDirective from "@/components/CustomDirective.vue";
import MixIns from "@/components/MixIns.vue";
import PlugIns from "@/components/PlugIns.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/calculator", component: CalculaTor },
  { path: "/calcomposition", component: CompositionAPI },
  { path: "/computed", component: CompositionAPI2 },
  { path: "/funccal", component: CompositionAPI3 },
  { path: "/jscal", component: ComponentAPI4 },
  { path: "/pvij", component: CompostionAPIProvide },
  { path: "/api", component: MixIns },
  { path: "/directive", component: CustomDirective },
  { path: "/plugin", component: PlugIns },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
