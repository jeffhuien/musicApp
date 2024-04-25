import { createPinia } from "pinia";
import type { App } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
export default function setupPinia(app: App) {
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
}

export { pinia };
