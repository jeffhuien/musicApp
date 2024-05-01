<script setup lang="ts">
//#ifdef MP-WEIXIN
let g = uni.getMenuButtonBoundingClientRect();
let h = reactive(g);
console.log(h);
console.log(true ? `mt-[${g.top}px] h-[${g.height}px]` : "");
//#endif
</script>

<template>
  <!-- #ifdef MP-WEIXIN -->
  <view class="black-all" :class="[]" :style="{ height: `${h.height}px`, marginTop: `${g.top}px` }">
    <view class="h-full flex items-end">
      <slot></slot>
    </view>
  </view>
  <!-- #endif -->

  <!-- #ifndef MP-WEIXIN -->
  <slot></slot>
  <!-- #endif -->
</template>

<style scoped lang="scss"></style>
