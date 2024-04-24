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
<style lang="scss"></style>
