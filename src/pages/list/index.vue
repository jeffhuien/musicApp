<script setup lang="ts">
import type { listInfo } from "#/index";
import { ListApi } from "@/Api";
// import ColorThief from "ColorThief";
let id = ref("0");

// const colorThief = new ColorThief();
// const mainColor = ref<string>();
// const secColor = ref<string>();
let bgStr = ref<string>();
let data = ref();
let info = ref<any>();
let infoData = ref<listInfo>();
let scrollView = ref();
let fatherRef = ref<any>();
let op = ref(1);
let head = ref();
let title = ref();

let scrollOk = ref(false);

// onMounted(() => {
//   console.log("123");
//   const query = uni.createSelectorQuery();
//   // 通过选择器指定要获取的元素，这里假设获取 id 为 'bg' 的元素
//   query
//     .select("#bg")
//     .boundingClientRect(data => {
//       // 在回调函数中可以获取到元素的位置和尺寸信息，包括高度
//       if (data) {
//         console.log("元素高度为：", data.height);
//       }
//     })
//     .exec();
// });

onLoad(async (option: any) => {
  console.log(option);
  id.value = option.id;
  // const pageInstance = getCurrentPages()[getCurrentPages().length - 1];
  // 从页面实例中获取路由信息
  //   const route = pageInstance.route; // 获取页面路径
  //   const options = pageInstance.options; // 获取页面参数
  //   console.log("当前路径：", route);
  //   console.log("页面参数：", options);
  //   console.log(pageInstance);
  data.value = await ListApi.getListSongs(id.value, {
    limit: 30,
    offset: 0,
  });
  info.value = await ListApi.getListDetail(id.value);
  let r = info.value.playlist;
  infoData.value = {
    id: r.id,
    img: r.coverImgUrl,
    name: r.name,
    tags: r.tags,
    playCount: r.playCount,
    createTime: r.createTime,
    commentCount: computed<number>(() => {
      let t = r.commentCount;
      return t >= 100000000 ? (t / 100000000).toFixed(2) + "亿" : t >= 10000 ? (t / 10000).toFixed(2) + "万" : t;
    }),
    collectCount: computed<number>(() => {
      let t = r.subscribedCount;
      return t >= 100000000 ? (t / 100000000).toFixed(2) + "亿" : t >= 10000 ? (t / 10000).toFixed(2) + "万" : t;
    }),
    description: r.description,
    user: {
      id: r.creator.userId,
      name: r.creator.nickname,
      img: r.creator.avatarUrl,
    },
  };

  // uni.getImageInfo({
  //   src: infoData.value.img,
  //   crossOrigin: "",
  //   success: function (image) {
  //     console.log(colorThief);

  //     console.log(image);
  //     console.log(image.height);
  //     var contentWidth = image.width;
  //     var contentHeight = image.height;
  //     console.log(image);

  //     let color = colorThief.getPalette(image, 3);
  //     mainColor.value = `rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`;
  //     secColor.value = `rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]})`;
  //     bgStr.value = `linear-gradient(to left top, ${mainColor.value} 40%, ${secColor.value})`;
  //   },
  // });
  // const query = uni.createSelectorQuery();
  // // 通过选择器指定要获取的元素，这里假设获取 id 为 'bg' 的元素
  // query
  //   .select("#bg")
  //   .boundingClientRect(data => {
  //     // 在回调函数中可以获取到元素的位置和尺寸信息，包括高度
  //     if (data) {
  //       console.log("元素高度为：", data.height);
  //     }
  //   })
  //   .exec();

  // const img = new Image();
  // img.crossOrigin = "";
  // img.src = infoData.value.img;
  // img.onload = () => {
  //   let color = colorThief.getPalette(img, 3);
  //   mainColor.value = `rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`;
  //   secColor.value = `rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]})`;
  //   bgStr.value = `linear-gradient(to left top, ${mainColor.value} 40%, ${secColor.value})`;
  // }
});

function father(a: { detail: { scrollTop: number } }) {
  console.log(head.value);

  // console.log("滑动", a.detail.scrollTop, "fac", father_c.value, "sok", scrollOk.value);
  if (a.detail.scrollTop > 400 + 8) {
    // head.value.$el?.offsetHeight
    op.value = 0;
    scrollOk.value = true;
  } else {
    op.value = 1 - a.detail.scrollTop / 400;
    scrollOk.value = false;
    console.log("op", op.value);
  }

  if (op.value < 0.5) {
    title.value = infoData.value?.name;

    uni.setNavigationBarTitle({
      title: title.value,
    });
  } else {
    title.value = "歌单";
    uni.setNavigationBarTitle({
      title: title.value,
    });
  }
}

const back = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<template>
  <view v-if="infoData">
    <view class="absolute size-[112%] box-border fixed -left-10 -top-2 blur-sm overflow-hidden" :style="{ background: bgStr }"></view>
    <scroll-view :scroll-y="true" ref="fatherRef" scroll-with-animation="true" @scroll="father" class="absolute box-border overscroll-contain h-full w-full top-0 z-50 transition-all">
      <view ref="head" id="bg" :style="{ opacity: op }">
        <view class="flex gap-3 pt-4">
          <view class="w-1/4 shrink-0">
            <g-card :img="infoData?.img" :count="infoData?.playCount"></g-card>
          </view>
          <view class="flex flex-col gap-1">
            <view class="title line-clamp-2 overflow-hidden">{{ infoData?.name }}</view>
            <view class="auth flex items-center">
              <image :src="infoData?.user.img" class="size-4 rounded-full"></image>
              <view class="ml-1 text-xs scale-80 opacity-80">{{ infoData?.user.name }}</view>
              <!-- {{ father_c }}---{{ child_c }} -->
            </view>

            <view class="tag flex mt-1 items-center">
              <view class="p-1 rounded-md bg-gray-700 bg-op-90 text-xs text-white scale-70 -translate-x-2" v-for="i in infoData?.tags">
                {{ i }}
              </view>
              <text class="text-xs op40">{{ new Date(infoData!.createTime).toLocaleDateString() }}</text>
            </view>
          </view>
        </view>
        <view class="w-auto flex flex-col gap-2 p-2">
          <view class=" ">
            <view class="text-xs op-70 line-clamp-3 overflow-hidden">
              {{ infoData?.description }}
            </view>
            <view class="btn flex gap-2 items-center mt-1">
              <text class="iconfont text-white relative bg-black/40 flex-1 rounded-3xl text-center py-1 flex items-center justify-center">&#xe68d; <text class="text-xs">播放全部</text></text>
              <text class="iconfont relative bg-black/40 text-white flex-1 rounded-3xl text-center py-1"
                >&#xe78a; <text class="text-xs">{{ infoData?.commentCount }}</text></text
              >
              <text class="iconfont relative bg-red-400 flex-1 rounded-3xl text-center text-white py-1"
                >&#xe78e; <text class="text-xs">{{ infoData?.collectCount }}</text></text
              >
            </view>
          </view>
        </view>
      </view>

      <view class="box-border h-[calc(100%-44px)] rounded-t-xl">
        <view class="p-1 rounded-t-xl py-2 bg-white dark:bg-slate/20 z-50" :class="op <= 0 ? ' top-[0px] fixed w-full py-3' : ''">
          <view>
            <view class="iconfont inline-block text-white bg-sky b b-solid p-1 rounded-full scale-80">&#xe68d;</view>播放全部

            <text class="op-70 text-xs">
              {{ data.songs.length }}
            </text>
          </view>
        </view>
        <view ref="childRef" class="box-border bg-white dark:bg-slate/20 overflow-hidden p-1">
          <g-list :data="data?.songs"></g-list>
        </view>
      </view>
    </scroll-view>
  </view>
  <view v-else class="flex justify-center items-center size-screen">
    <g-loading color1="#f46ec6"></g-loading>
  </view>
</template>

<style scoped lang="scss"></style>
