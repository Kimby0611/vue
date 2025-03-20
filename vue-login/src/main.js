import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

window.Kakao.init("8affafdc54130fd5040617a2dd44b020");
