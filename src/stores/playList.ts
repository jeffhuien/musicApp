import { defineStore } from "pinia";
import playControl from "./playControl";

interface playListType {
  id: number;
  name: string;
  singerName: string;
  fee: number;
  time: string;
}

export default defineStore(
  "playList",
  () => {
    // 播放列表
    let playList1 = ref<playListType[]>([]);
    let isCloud = ref(false);
    let name = ref("未指定名称的列表");
    // 当前播放的歌曲
    let playIndex = computed(() => {
      return playList1.value.findIndex(item => item.id === playControl().playId);
    });
    // 当前播放模式
    let playMode = ref<"Loop" | "Random" | "SingleLoop">("Loop");
    let historyPlayList = ref<any>();

    return {
      playList1,
      playIndex,
      playMode,
      isCloud,
      name,
      historyPlayList,
    };
  },
  {
    persist: true,
  }
);
