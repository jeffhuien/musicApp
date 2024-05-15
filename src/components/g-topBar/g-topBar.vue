<script setup lang="ts">
//#ifdef MP-WEIXIN
let g = uni.getMenuButtonBoundingClientRect();
let h = reactive(g);
//#endif
</script>

<!-- <view class="black-all" :class="[]" :style="{ height: `${h.height}px`, marginTop: `${g.top}px` }">
  <view class="h-full flex items-end">
    <slot></slot>
  </view>
</view> -->
<template>
  <!-- #ifdef MP-WEIXIN -->
  <view></view>
  <!-- #endif -->

  <!-- #ifndef MP-WEIXIN -->
  <view class="mt-[--status-bar-height]">
    <slot></slot>
  </view>
  <!-- #endif -->
</template>

<style scoped lang="scss"></style>
