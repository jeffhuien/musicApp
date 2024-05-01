import { defineStore } from "pinia";
import auth from "./auth";
import loading from "./loading";
import UserList from "./UserList";
import playList from "./playList";
import playControl from "./playControl";
import searchHistory from "./searchHistory";

const main = defineStore(
  "main",
  () => {
    const menuClose = ref(false);
    const listClose = ref(true);
    const isMobile = ref(false);
    const loginShow = ref(false);

    let statusHeight = uni.getSystemInfoSync().statusBarHeight ?? 30;

    let count = ref(12);
    let dbl = computed(() => count.value * 2);

    return { isMobile, statusHeight, loginShow, menuClose, listClose, count, dbl };
  },
  {
    persist: true,
  }
);

export { main, loading, playList, playControl, searchHistory, UserList, auth };
