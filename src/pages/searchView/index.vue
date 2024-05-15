<script setup lang="ts">
import { searchHistory } from "@/stores";

let data: any;
data = getCurrentPages();
console.log(data);

watchEffect(() => {});

async function enterSearch(keywords: string) {
  searchHistory().add(keywords);
  console.log(keywords);
  // uni.navigateTo({ url: `/search?keywords=${keywords}` });
}
</script>

<template>
  <view class="size-full flex flex-col w-auto gap-3">
    <g-topBar></g-topBar>

    <g-search class="" @search="enterSearch"></g-search>
    <view class="p-1"> </view>

    <view class="w-full h-43 flex items-center justify-center bg-sky">
      <g-loading></g-loading>
    </view>

    <view>
      <view class="overflow-hidden z-[51] flex max-sm:scale-90 suggest min-h-[15rem] absolute top-[120%] max-sm:top-2 max-sm:-left-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <view v-if="data?.result" class="h-full w-full absolute">
          <view v-if="data.result.albums" class="flex flex-col gap-2 p-2 h-full border dark:border-gray-700 dark:bg-gray-800 bg-white">
            <view class="flex p-1 border-b">
              <h2 class="self-center w-2/12 flex-shrink-0 text-gray-500 text-center">单曲</h2>
              <view class="flex-1 w-10/12">
                <view class="flex gap-2 flex-wrap" v-for="(item, index) in data.result.songs" :index="index">
                  <p class="py-2 w-full hover:bg-gray-100 pl-2 truncate" @click="enterSearch(item.name)">
                    <span v-html="item.name"></span>
                    {{ item.artists.map(i => i.name).join("、") }}
                  </p>
                </view>
              </view>
            </view>
            <view class="flex p-1 border-b">
              <h2 class="self-center w-2/12 text-gray-500 text-center">专辑</h2>
              <view class="flex-1 w-10/12">
                <view class="flex gap-2 flex-wrap" v-for="(item, index) in data.result.albums" :index="index">
                  <p class="py-2 w-full hover:bg-gray-100 pl-2 truncate" @click="enterSearch(item.name)">{{ item.name }} - {{ item.artist.name }}</p>
                </view>
              </view>
            </view>
          </view>
          <view v-else class="h-full border-none justify-center items-center flex">
            <g-empty :description="'没有搜到歌曲哦~'" class="text-xs" :image-size="70"></g-empty>
          </view>
        </view>

        <view v-else class="w-full">
          <view class="suggest flex flex-col gap-2 p-2 !min-h-52 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-lg">
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
                  class="text-xs border border-sky-500 bg-white dark:bg-gray-800 px-3 py-1 rounded-md max-w-28 truncate dark:hover:bg-slate-500 hover:bg-gray-100 hover:text-sky-500"
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
              <ul class="text-gray-500 list-decimal translate-x-5" v-if="ls.code">
                <li class="text-xs hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-2xl" v-for="(i, index) in ls.result.hots" :index="index" @click="enterSearch(i.first)">
                  {{ i.first }}
                </li>
              </ul>
              <g-loading v-else class="">g-loading</g-loading>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
