<script setup lang="ts">
function a() {
  // uni.showToast({
  //   title: "加载成功标题",
  //   duration: 2000,
  //   position: "bottom",
  // });
  uni.showLoading({
    title: "加载中3434",
  });

  setTimeout(function () {
    uni.hideLoading();
  }, 4000);
}
</script>

<template>
  <text @click="a">1212342</text>
</template>

<style scoped lang="scss"></style>
