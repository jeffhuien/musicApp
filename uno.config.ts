// uno.config.ts
import { defineConfig, presetWind, presetUno } from "unocss";
import { presetUni } from "@uni-helper/unocss-preset-uni";
export default defineConfig({
  presets: [
    //
    presetUni(),
    // presetWind(),
    presetUno(),
  ],
});
