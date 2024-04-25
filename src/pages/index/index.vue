<script setup lang="ts">
import type { SongUrlType } from "#/song/songUrl";
import { SongApi } from "@/Api";

function a(i: string) {
  uni.showToast({
    title: i.toString(),
    duration: 2000,
    position: "bottom",
  });
}

let data = ref<SongUrlType>();
onMounted(async () => {
  data.value = await SongApi.getSongUrl("28949444");
});
</script>

<template>
  <view class="overflow-hidden overflow-y-auto h-full flex flex-col p-5">
    <text class="break-all" v-for="(i, k) in data?.data[0]" :key="k" @click="a(i)">
      <text class="text-lightblue">{{ k }}</text>
      <text>: {{ i }}</text>
    </text>
  </view>
</template>

<style scoped lang="scss"></style>
