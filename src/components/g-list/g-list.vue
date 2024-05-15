<script setup lang="ts">
interface song {
  name: string;
  ar: string[];
  al: {
    picUrl: string;
  };
  alia: string[];
  id: number;
  dt: number;
}
const props = defineProps<{
  data: song[];
}>();
</script>

<template>
  <view>
    <view class="flex flex-col gap-2">
      <view class="flex gap-3 items-center p-2 shadow-sm border b-1 border-solid border-gray/20 rounded-lg" v-for="(i, index) in props.data" :key="index">
        <image class="w-10 h-10 rounded-lg" :src="i.al.picUrl"></image>
        <view class="flex flex-col">
          <text class="opacity-70 text-sm font-bold">{{ i.name }} </text>
          <text class="text-xs opacity-50">{{ i?.ar.map((o: any) => o.name).join("、") }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
