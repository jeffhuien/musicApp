import { defineStore } from "pinia";
import type { AuthType } from "#/auth";
export default defineStore(
  "auth",
  () => {
    let user = ref<AuthType>();
    const isLogin = ref(false);
    const level = ref(0);
    const UID = computed(() => user.value?.data.profile.userId);
    const likeIds = ref<number[]>([]);
    // 设置用户信息
    function setAuthInfo(u: AuthType) {
      user.value = u;
      isLogin.value = true;
    }
    return { user, setAuthInfo, isLogin, level, UID, likeIds };
  },
  {
    persist: true,
  }
);
