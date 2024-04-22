<template>
  <view class="content center gap-2 size-screen bg-green/30">
    <image class="h-30 w-30" src="/static/logo.png" />
    <view class="text-area border p-10 bg-blue flex flex-col gap-10">
      <button class="text-red/60" @click="a">{{ title }}32</button>
      <up-button text="月落"></up-button>
      <up-text text="我用十年青春,赴你最后之约"></up-text>
      <up-toast ref="uToastRef"></up-toast>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref("Hello");
function a() {
  showToast(["我是提示文案,建议不超过十五字~"]);
}

const uToastRef = ref<any>(null);
function showToast(params: any[]) {
  uToastRef.value?.show({
    message: params[0],
    position: "bottom",
    duration: 2000,
  });
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
