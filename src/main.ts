import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
// import { createPinia } from "pinia";
// import * as Pinia from "pinia";

import setupPinia, { pinia } from "./plugins/pinia";

// #ifdef VUE3
export function createApp() {
  const app = createSSRApp(App);
  // app.use(Pinia.createPinia());
  setupPinia(app);
  return {
    app,
    // Pinia,
    pinia,
  };
}
// #endif
