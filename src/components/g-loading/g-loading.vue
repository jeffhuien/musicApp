<script setup lang="ts">
const props = defineProps<{
  color1?: string;
}>();
</script>

<template>
  <view
    class="loading"
    :style="{
      '--color1': props.color1 || 'pink',
    }"
  ></view>
</template>

<style scoped lang="scss">
.loading {
  position: relative;
  width: 50px;
  perspective: 200px;
  --color1: pink;
  --color2: red;
}

.loading:before,
.loading:after {
  position: absolute;
  width: 20px;
  height: 20px;
  content: "";
  animation: jumping 0.5s infinite alternate;
  background: var(--color2);
}

.loading:before {
  left: 0;
}

.loading:after {
  right: 0;
  animation-delay: 0.15s;
}

@keyframes jumping {
  0% {
    transform: scale(1) translateY(0px) rotateX(0deg);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(1.2) translateY(-25px) rotateX(45deg);
    background: var(--color1);
    box-shadow: 0 25px 40px #000;
  }
}
</style>
