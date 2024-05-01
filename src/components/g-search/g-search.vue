<script setup lang="ts">
import type { Hot } from "#/search/hot";
import type { searchSuggest } from "#/search/searchSuggest";
import { SearchApi } from "@/Api/search";
// import router from "@/router";
import { searchHistory } from "@/stores";
import { random } from "lodash";

let keyword = ref<string>("");
let data = ref<searchSuggest>();
let show = ref(false);
let ls = ref<Hot>({} as unknown as Hot);
async function search(keywords: string) {
  data.value = await SearchApi.Suggest(keywords);

  data.value?.result.songs.forEach(item => {
    // 正则匹配item.name 与keyword,匹配到的字符使用span标签包裹
    return (item.name = item.name.replace(new RegExp(keywords, "gi"), match => {
      return `<span class='text-sky-500'>${match}</span>`;
    }));
  });
}

let f = ref<boolean>(false);
function start() {
  f.value = true;
}

function end() {
  f.value = false;
  search(keyword.value);
}

function s() {
  if (!f.value) search(keyword.value);
}

async function enterSearch(keywords: string) {
  // searchHistory().add(keywords);
  // router.push(`/search?keywords=${keywords}`);
}

async function getFocus() {
  show.value = true;
  if (!ls.value.code) ls.value = await SearchApi.Hot();
  if (keyword.value) data.value = await SearchApi.Suggest(keyword.value);
}
function lostFocus() {
  setTimeout(() => {
    show.value = false;
    data.value = undefined;
  }, 300);
}

let timer: number | null = null;
let Text = ref("");
function randomText() {
  let l = ls.value.result?.hots?.length;
  let t;
  try {
    t = ls.value.result.hots ? ls.value.result.hots[random(0, l)]?.first : "";
  } catch (error) {
    t = "";
  }
  return t;
}

onMounted(async () => {
  if (!ls.value.code) ls.value = await SearchApi.Hot();
  Text.value = randomText();
  timer = setInterval(() => (Text.value = randomText()), 3000);
});

onUnmounted(() => {
  clearInterval(timer!);
});
</script>

<template>
  <view class="w-full relative flex max-md:ml-0 text-xs">
    <i class="fa-solid fa-magnifying-glass absolute top-[23%] left-3 opacity-50 text-sm"></i>
    <input
      type="text"
      class="dark:bg-gray-800 transition-all duration-700 w-52 focus:w-64 rounded-3xl border caret-pink-500 pl-8 py-2 max-sm:py-1 text-xs text-gray-600 focus:outline-sky-200 hover:border-lime-300 outline-none"
      v-model="keyword"
      :placeholder="Text"
      @compositionstart="start"
      @compositionend="end"
      @input="s"
      @focus="getFocus"
      @blur="lostFocus"
      @keydown.stop=""
      @keyup.enter="enterSearch(keyword ? keyword : Text)"
    />
    <view v-show="show" class="overflow-hidden z-[51] flex max-sm:scale-90 suggest min-h-[15rem] absolute top-[120%] max-sm:top-2 max-sm:-left-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg">
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
          <ElEmpty :description="'没有搜到歌曲哦~'" class="text-xs" :image-size="70"></ElEmpty>
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
            <Loading v-else class="">loading</Loading>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
