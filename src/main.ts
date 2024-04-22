import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
import uviewPlus from "uview-plus";

// #ifdef VUE3
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  return {
    app,
  };
}
// #endif
