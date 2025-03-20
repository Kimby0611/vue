import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import NestedComponent from "@/views/NestedComponent.vue";
import PropsEx from "@/components/other_component/PropsEx.vue";
import PropsNum from "@/components/other_component/PropsNum.vue";
import PropVali from "@/components/other_component/PropVali.vue";
import BtnEv from "@/components/parent/BtnEv.vue";
import FuncEv from "@/components/parent/FuncEv.vue";
import DataOption from "@/components/parent/DataOption.vue";
import EventData from "@/components/parent/EventData.vue";
import DataSync from "@/components/parent/DataSync.vue";
import SlotModel from "@/components/slot/SlotModel.vue";
import ProVide from "@/components/parent/ProVide.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/title", component: NestedComponent },
  { path: "/props", component: PropsEx },
  { path: "/num", component: PropsNum },
  { path: "/vali", component: PropVali },
  { path: "/btnev", component: BtnEv },
  { path: "/funcev", component: FuncEv },
  { path: "/dataoption", component: DataOption },
  { path: "/eventdata", component: EventData },
  { path: "/datasync", component: DataSync },
  { path: "/slot", component: SlotModel },
  { path: "/provide", component: ProVide },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
