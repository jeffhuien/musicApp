import { defineStore } from "pinia";

const main = defineStore(
  "main",
  () => {
    const menuClose = ref(false);
    const listClose = ref(true);
    const isMobile = ref(false);
    const loginShow = ref(false);

    let count = ref(12);
    let dbl = computed(() => count.value * 2);

    return { isMobile, loginShow, menuClose, listClose, count, dbl };
  },
  {
    persist: true,
  }
);

export { main };
