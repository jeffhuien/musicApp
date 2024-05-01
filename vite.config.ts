import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ConfigEnv } from "vite";
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  // const root = process.cwd();
  // const env = parseEnv(loadEnv(mode, root));
  // console.log(env.VITE_API_URL);

  return {
    plugins: [
      //自动引入vue和uni-app的api
      uni(),
      Unocss(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ["vue", "uni-app"],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: "types/auto-import.d.ts",
        // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src"),
        "#": path.resolve(__dirname, "../types"),
      },
    },
  };
};
