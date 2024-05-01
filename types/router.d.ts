import 'vue-router'
// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {}

declare module 'vue-router' {
  interface RouteMeta {
    login?: boolean
    /**进入动画 */
    enter?: string
    /**离开动画 */
    leave?: string
    mode?: 'default' | 'in-out' | 'out-in' | undefined
  }
}
