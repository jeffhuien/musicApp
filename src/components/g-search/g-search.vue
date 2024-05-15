<script setup lang="ts">
import type { Hot } from "#/search/hot";
import type { searchSuggest } from "#/search/searchSuggest";
import { SearchApi } from "@/Api/search";
import { random } from "lodash";
let keyword = ref<string>("");
// let data = ref<searchSuggest>();
// let show = ref(false);
// let ls = ref<Hot>({} as unknown as Hot);

interface p {
  suggest_data: searchSuggest | undefined;
  hot_ls: Hot;
}
const props = defineProps<{
  modelValue?: p;
}>();

const emit = defineEmits<{
  (e: "search", keywords: string): void;
  (e: "enterSearch", keywords: string): void;
}>();

let f = ref<boolean>(false);
function start() {
  f.value = true;
}

function end() {
  f.value = false;
  emit("search", keyword.value);
}

function s() {
  if (!f.value) emit("search", keyword.value);
}

let timer: number | null = null;
let Text = ref("");
function randomText() {
  let l = props.modelValue!.hot_ls.result?.hots?.length;
  let t;
  try {
    t = props.modelValue!.hot_ls.result.hots ? props.modelValue!.hot_ls.result.hots[random(0, l)]?.first : "";
  } catch (error) {
    t = "";
  }
  return t;
}

watchEffect(() => {
  if (keyword.value.length == 0) {
    props.modelValue!.suggest_data = undefined;
  }
});
onMounted(async () => {
  if (!props.modelValue!.hot_ls?.code) props.modelValue!.hot_ls = await SearchApi.Hot();
  Text.value = randomText();
  timer = setInterval(() => (Text.value = randomText()), 3000);
});

onUnmounted(() => {
  console.log("unmounted");
  clearInterval(timer!);
});
</script>

<template>
  <view class="relative flex items-center justify-between max-md:ml-0 text-xs w-full box-border">
    <label for="" class="relative flex items-center justify-center flex-1">
      <i class="iconfont absolute left-3 opacity-50 text-sm">&#xe687;</i>
      <input
        type="text"
        class="flex-1 dark:bg-gray-800 transition-all duration-700 rounded-3xl border border-solid w-auto pl-8 py-1 max-sm:py-1 text-xs text-gray-600 focus:outline-sky-200 hover:border-lime-300 outline-none"
        v-model="keyword"
        :placeholder="Text"
        @compositionstart="start"
        @compositionend="end"
        @input="s"
        @keydown.stop=""
        @keyup.enter="$emit('enterSearch', keyword ? keyword : Text)"
      />
      <i class="iconfont absolute cursor-pointer right-3 opacity-50 text-sm" @click="keyword = ''" v-if="keyword.length != 0">&#xe68f;</i>
    </label>

    <text class="text-xs mx-2" @click="$emit('enterSearch', keyword ? keyword : Text)">搜索</text>
  </view>
</template>

<style scoped lang="scss"></style>
