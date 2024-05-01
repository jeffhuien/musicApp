import type { FindUserType, UserListType } from "#/index";
import { defineStore } from "pinia";

export default defineStore(
  "UserList",
  () => {
    const list = ref<UserListType[]>([]);
    const user = ref<FindUserType[]>([]);
    function get(id: string) {
      return list.value.findIndex(i => i.id === id) !== -1 ? true : false;
    }

    /**
     *
     * @param i 用户歌单
     * @returns
     */
    function set(i: UserListType) {
      if (get(i.id)) return;
      else list.value.push(i);
    }
    /**
     *
     * @param id 待删除的歌单
     */
    function remove(id: string) {
      list.value.splice(
        list.value.findIndex(i => i.id === id),
        1
      );
    }
    function addUser(i: FindUserType) {
      user.value.findIndex(k => k.id == i.id) == -1 ? user.value.push(i) : "";
    }
    function removeUser(id: string) {
      let t = user.value.findIndex(i => i.id === id);
      t != -1 ? user.value.splice(t, 1) : "";
    }
    const update = ref(0);
    return {
      //
      update,
      list,
      set,
      get,
      remove,
      user,
      addUser,
      removeUser,
    };
  },
  {
    persist: true,
  }
);
