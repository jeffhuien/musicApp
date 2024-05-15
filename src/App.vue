<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  // #ifdef APP-PLUS
  //设置2.4秒后主动关闭，最多设置6秒
  setTimeout(() => {
    plus.navigator.closeSplashscreen();
  }, 2400);
  // #endif
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
// @font-face {
//   font-family: "iconfont"; /* Project id 4532331 */
//   src: url("https://at.alicdn.com/t/c/font_4532331_0nrpvo7ce5uk.woff2?t=1714703024708") format("woff2"), url("https://at.alicdn.com/t/c/font_4532331_0nrpvo7ce5uk.woff?t=1714703024708") format("woff"),
//     url("https://at.alicdn.com/t/c/font_4532331_0nrpvo7ce5uk.ttf?t=1714703024708") format("truetype");
// }

@import url("@/static/css/iconfont.css");
</style>
