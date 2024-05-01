<script setup lang="ts">
import { SongApi } from "@/Api";

let activeIndex = 0;
function tabClick(index: number, item: any) {
  console.log("tabClick", index, item);
}
// 标签切换事件
function tabChange(index: number, item: any) {
  console.log("tabChange", index, item);
}

SongApi.getSongUrl("1436792531");
const ls = ref([
  {
    name: "推荐",
    id: 1,
  },
  {
    name: "最新",
    id: 2,
  },
]);
</script>

<template>
  <view class="size-screen flex flex-col px-1 overflow-hidden box-border">
    <view class="flex-1 size-full">
      <y-tabs class="" :statusbar="false" :shrink="true" :swipeable="true" v-model="activeIndex" @click="tabClick" @change="tabChange">
        <y-tab class="y-tab-virtual" v-for="i in ls" :key="i.id" :title="i.name">
          <view>
            <g-search></g-search>
          </view>
        </y-tab>
      </y-tabs>
    </view>
  </view>
</template>

<style scoped lang="scss">
:deep(.uni-navbar view) {
  border: none !important;
}

:deep(.y-tabs) {
  height: 100%;
  width: 100%;
}
:deep(.y-tabs .y-tabs__content) {
  height: 90%;
  width: 100%;
  overflow-y: auto;
}

:deep(.y-tabs__wrap) {
  height: 10% !important;
}
// :deep(.y-tabs .y-tabs__content .y-tabs__track) {
//   height: 100%;
//   width: 100%;
// }
// :deep(.y-tabs .y-tabs__content .y-tabs__track .y-tab__pane--wrap) {
//   height: 100%;
//   width: 100%;
// }
</style>
