import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";

// #ifdef VUE3
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
