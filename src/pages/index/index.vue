<script setup lang="ts">
import { CommonApi, SongApi } from "@/Api";
import type { Hot } from "#/search/hot";
import type { searchSuggest } from "#/search/searchSuggest";

let HOT_list = ref();

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

let propsData = reactive({
  suggest_data: ref<searchSuggest>(),
  hot_ls: ref<Hot>(),
});

const toSearchPage = () => {
  console.log("toSearchPage");
  uni.navigateTo({
    url: "/pages/search/index",
  });
};
onMounted(async () => {
  HOT_list.value = await CommonApi.getHOTList();
});
</script>

<template>
  <view class="flex flex-col px-1 overflow-hidden box-border">
    <view class="flex-1 size-full">
      <g-topBar></g-topBar>
      <y-tabs class="" :statusbar="false" :shrink="true" :swipeable="true" v-model="activeIndex" @click="tabClick" @change="tabChange">
        <y-tab class="y-tab-virtual" v-for="i in ls" :key="i.id" :title="i.name">
          <view v-if="i.id == 1">
            <view class="my-1" @click="toSearchPage">
              <g-search v-model:modelValue="propsData"></g-search>
            </view>
            <view>
              <text class="text-sky">推荐歌单</text>
              <view class="grid grid-cols-3 gap-2">
                <g-card v-for="(i, index) in HOT_list?.playlists" :key="index" :img="i.coverImgUrl" :text="i.name" :count="i.playCount" :id="i.id" to="list"></g-card>
              </view>
            </view>

            <view>
              <text class="text-sky">推荐歌单</text>
              <view class="grid grid-cols-3 gap-2">
                <g-card v-for="(i, index) in HOT_list?.playlists" :key="index" :img="i.coverImgUrl" :text="i.name" :count="i.playCount" :id="i.id" to="list"></g-card>
              </view>
            </view>
          </view>

          <view v-if="i.id == 2">
            <p>22</p>
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
