<script setup lang="ts">
import { main } from "@/stores";
let h = 0;
// #ifdef H5 || APP-PLUS
h = main().statusHeight;
// #endif
</script>

<template>
  <view class="flex flex-col size-screen">
    <!-- <g-topBar>
      <text class="text-red-300">2345</text>
    </g-topBar> -->
    <view class="flex-1 bg-blue" :style="{ marginTop: h + 'px' }">123</view>
  </view>
</template>

<style scoped lang="scss"></style>
