<script setup lang="ts">
import { SearchApi } from "@/Api";
import { searchHistory } from "@/stores";
import type { Hot } from "#/search/hot";
import type { searchSuggest } from "#/search/searchSuggest";

let propsData = reactive({
  suggest_data: ref<searchSuggest>(),
  hot_ls: ref<Hot>(),
});

// data = getCurrentPages();
// console.log(data);

watchEffect(() => {});

async function search(keywords: string) {
  propsData.suggest_data = await SearchApi.Suggest(keywords);
  propsData.suggest_data?.result.songs.forEach((item: { name: string }) => {
    // 正则匹配item.name 与keyword,匹配到的字符使用span标签包裹
    return (item.name = item.name.replace(new RegExp(keywords, "gi"), match => {
      return `<span class='text-sky-500'>${match}</span>`;
    }));
  });

  propsData.suggest_data?.result.albums.forEach((item: { name: string }) => {
    // 正则匹配item.name 与keyword,匹配到的字符使用span标签包裹
    return (item.name = item.name.replace(new RegExp(keywords, "gi"), match => {
      return `<span class='text-sky-500'>${match}</span>`;
    }));
  });
}
async function enterSearch(keywords: string) {
  searchHistory().add(keywords);
  console.log(keywords);
  // uni.navigateTo({ url: `/search?keywords=${keywords}` });
}
</script>

<template>
  <view class="size-screen flex flex-col w-auto gap-3 box-border overflow-hidden">
    <g-topBar></g-topBar>
    <g-search class="p-1" @search="search" @enterSearch="enterSearch" v-model:modelValue="propsData"></g-search>
    <view class="flex-1 grow box-border">
      <view class="flex h-full suggest dark:bg-gray-800 rounded-md shadow-lg">
        <view v-if="propsData.suggest_data?.result" class="h-full w-full">
          <view v-if="propsData.suggest_data.result.albums" class="flex flex-col gap-2 p-2 h-full border dark:border-gray-700 dark:bg-gray-800 bg-white">
            <view class="flex p-1 border-stone/40000 border-1 border-b-solid">
              <h2 class="self-center w-2/12 text-sm flex-shrink-0 text-gray-500 text-center">单曲</h2>
              <view class="flex-1 w-10/12">
                <view class="flex gap-2 flex-wrap" v-for="(item, index) in propsData.suggest_data.result.songs" :key="index">
                  <p class="py-2 w-full hover:bg-gray-100 pl-2 truncate" @click="enterSearch(item.name)">
                    <span v-html="item.name"></span>
                    {{ item.artists.map(i => i.name).join("、") }}
                  </p>
                </view>
              </view>
            </view>
            <view class="flex p-1 border-b">
              <h2 class="self-center w-2/12 text-sm text-gray-500 text-center">专辑</h2>
              <view class="flex-1 w-10/12">
                <view class="flex gap-2 flex-wrap" v-for="(item, index) in propsData.suggest_data.result.albums" :key="index">
                  <p class="py-2 w-full hover:bg-gray-100 pl-2 truncate" @click="enterSearch(item.name)">
                    <span v-html="item.name"></span>
                    - {{ item.artist.name }}
                  </p>
                </view>
              </view>
            </view>
          </view>
          <view v-else class="h-full border-none justify-center items-center flex">
            <g-empty :description="'没有搜到歌曲哦~'" class="text-xs" :image-size="70"></g-empty>
          </view>
        </view>

        <view v-else class="w-full h-full flex flex-col">
          <view class="suggest h-full flex flex-col gap-2 p-2 !min-h-52 border dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-lg">
            <view class="">
              <view class="mb-2">
                <span class="relative">
                  <span class="relative z-10"> 搜索历史 </span>
                  <span class="block absolute top-2 z-0 w-full h-2 bg-pink-500/75"> </span>
                </span>
              </view>
              <view class="flex gap-2 flex-wrap justify-normal">
                <span
                  v-for="i in searchHistory().searchHistory"
                  @click="enterSearch(i)"
                  :key="i"
                  class="text-xs border border-solid border-sky-500 bg-white dark:bg-gray-800 px-3 py-1 rounded-md max-w-28 truncate dark:hover:bg-slate-500 hover:bg-gray-100 hover:text-sky-500"
                >
                  {{ i }}
                </span>
              </view>
            </view>

            <view class="flex flex-col">
              <view class="mb-2">
                <span class="relative">
                  <span class="relative z-10"> 热搜 </span>
                  <span class="block absolute top-2 z-0 w-full h-2 bg-pink-500/75"> </span>
                </span>
              </view>
              <ul class="text-gray-500 list-decimal translate-x-5" v-if="propsData.hot_ls?.code">
                <li class="text-xs hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-2xl" v-for="(i, index) in propsData.hot_ls.result.hots" :key="index" @click="enterSearch(i.first)">
                  {{ i.first }}
                </li>
              </ul>
              <g-loading v-else class="w-auto text-center">g-loading</g-loading>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
