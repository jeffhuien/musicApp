<script setup lang="ts">
const props = withDefaults(defineProps<{ description: string }>(), {
  description: "什么都没有找到",
});
</script>

<template>
  <view class="w-auto flex flex-col justify-center items-center">
    <image src="@/static/ico/empty.svg" class="w-20 h-20" :mode="'aspectFit'" alt=""></image>
    <text class="text-gray-400 text-xs mt-2 text-center">{{ props.description }}</text>
  </view>
</template>

<style scoped lang="scss"></style>
