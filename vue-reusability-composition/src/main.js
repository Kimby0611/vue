import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18nPlugin from "./router/i18n";

const i18nStrings = {
  en: {
    hi: "Hello!",
  },
  ko: {
    hi: "안녕하세요!",
  },
};

createApp(App).use(router).use(i18nPlugin, i18nStrings).mount("#app");
