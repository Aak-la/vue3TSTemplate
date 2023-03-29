import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes/index";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "animate.css";
import svgIcon from "@/components/svgIcon/index.vue";
const pinia = createPinia();
const app = createApp(App);
import "virtual:svg-icons-register";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);
app.component("svg-icon", svgIcon);
app.mount("#app");
