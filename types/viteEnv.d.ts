/*
 * @Author: GAO GAO
 * @Date: 2024-01-06 14:38:15
 */
interface ImportMetaEnv extends ViteEnv {
  // readonly VITE_APP_TITLE: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ViteEnv {
  VITE_API_URL: string;
}
