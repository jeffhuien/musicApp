<script setup lang="ts">
const props = defineProps<{
  img: string;
  text?: string;
  id?: number;
  to?: string;
  count?: number;
}>();

const parseCount = (count: number) => {
  if (count > 100000000) {
    return (count / 10000000).toFixed(1) + "亿";
  }
  if (count > 10000) {
    return (count / 10000).toFixed(1) + "万";
  }
  return count;
};
const count = computed(() => (props.count ? parseCount(props.count) : 0));

const to = () => {
  uni.navigateTo({
    url: `/pages/${props.to}/index?id=${props.id}`,
  });
};
</script>

<template>
  <view @click="to" class="flex flex-col text-xs overflow-hidden gap-1">
    <view class="relative flex flex-col items-center justify-center line-clamp-1">
      <image :src="props.img" :mode="'scaleToFill'" class="h-20 w-20 rounded-lg"></image>
      <text v-if="props.count" class="bg-black/40 scale-70 text-white p-1 rounded-lg absolute bottom-0 -right-2 w-auto px-1 text-right">
        <text class="iconfont">&#xe68d; </text>
        {{ count }}
      </text>
    </view>
    <text class="text-truncate w-full">{{ props.text }}</text>
  </view>
</template>

<style scoped lang="scss"></style>
