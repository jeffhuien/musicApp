import type { getPlayUrl } from "#/song/get-url";
import type { Song as s_info } from "#/song/songInfo";
import { Music, setDocumentTitle } from "@/utils";
import { defineStore } from "pinia";
import { ref } from "vue";
import playList from "./playList";

export default defineStore(
  "playControl",
  () => {
    let volume = ref<number>(1);
    let isPlay = ref<boolean>(false);
    let currentTime = ref<number>(0.01);
    let duration = ref<number>(0.01);
    let musicName = ref<string>("快选择音乐播放吧~");
    let singerName = ref<string>("");
    let songImg = ref<string>("img/logo.png");
    let songAl = ref<string>("");
    let playUrl = ref<string>("undefined");
    let playId = ref<number>(0);
    let isMuted = ref(false);
    let { playList1, playIndex, isCloud, playMode } = toRefs(playList());

    async function playNext() {
      if (playMode.value === "Random") {
        let index = Math.floor(Math.random() * playList1.value.length);
        playMusicById(playList1.value[index].id);
        return;
      }
      // 下一首
      let nextId = 0;
      if (playList1.value?.length) {
        if (playIndex.value != playList1.value.length - 1) {
          // 判断是否是最后一首
          nextId = playList1.value[playIndex.value + 1].id;
        } else {
          //是最后一首
          nextId = playList1.value[0].id;
        }
        try {
          // const { playMusicById } = await import('@/utils/play')
          if (isCloud) {
            await playCloudMusic(undefined, nextId.toString());
          } else {
            await playMusicById(nextId);
          }
        } catch (error) {
          console.log(error);
          playNext();
        }
      }
    }
    async function playPrev() {
      if (playMode.value === "Random") {
        let index = Math.floor(Math.random() * playList1.value.length);
        playMusicById(playList1.value[index].id);
        return;
      }

      // 上一首
      let prevId = 0;
      if (playList1.value?.length) {
        if (playIndex.value != 0) {
          prevId = playList1.value[playIndex.value - 1].id;
        } else {
          prevId = playList1.value[playList1.value.length - 1].id;
        }
        try {
          if (isCloud) {
            await playCloudMusic(undefined, prevId.toString());
          } else {
            await playMusicById(prevId);
          }
        } catch (error) {
          playPrev();
        }
      }
    }

    async function playMusic(i: s_info) {
      const { SongApi } = await import("@/Api/song");
      let url = await SongApi.getSongUrl(i.id);
      try {
        await setStore(i, url);
      } catch (error) {
        playNext();
        throw new Error("无版权无法播放");
      }
    }
    async function playCloudMusic(i?: s_info, id?: string) {
      let Id: string;
      let d: s_info;
      if (i) {
        Id = i.id.toString();
        d = i;
      } else {
        Id = id!;
        const { SongApi } = await import("@/Api/song");
        d = (await SongApi.getSongDetail(Id)).songs[0];
      }
      const { AuthApi } = await import("@/Api/User");
      let url = await AuthApi.getPlayUrl(Id);
      try {
        await setStore(d, url, false);
      } catch (error) {
        playNext();
        throw new Error("无版权无法播放");
      }
    }
    async function playMusicById(id: number) {
      const { SongApi } = await import("@/Api/song");

      let url = await SongApi.getSongUrl(id);
      let song = (await SongApi.getSongDetail(id)).songs[0];
      try {
        await setStore(song, url);
      } catch (error) {
        playNext();
        throw new Error("无版权无法播放");
      }
    }

    async function setStore(song: s_info, url: getPlayUrl, msg: boolean = true) {
      playUrl.value = url.data[0].url;
      songImg.value = song.al.picUrl;
      musicName.value = song.name;
      songAl.value = song.al.name;
      singerName.value = song.ar.length > 0 ? song.ar?.map((item: any) => item.name).join("、") : song.ar[0].name;
      isPlay.value = true;
      playId.value = song.id;
      currentTime.value = 0;

      try {
        await Music.play(playUrl.value);
      } catch (error) {
        playMusicById(playId.value);
      }
      duration.value = Music.getDuration();
      setDocumentTitle(musicName.value + " - " + singerName.value);
    }

    watch([volume, isMuted, isPlay], async (newV, oldV) => {
      Music.setVolume(newV[0]);
      newV[1] != oldV[1]
        ? //
          Music.setMuted()
        : "";
      newV[2] != oldV[2]
        ? //
          newV[2]
          ? await Music.play(playUrl.value)
          : Music.pause()
        : "";
    });

    function BarPlay(i: s_info, index: number) {
      playMusicById(i.id);
    }

    return {
      //
      duration,
      isPlay,
      isMuted,
      volume,
      singerName,
      musicName,
      songImg,
      playUrl,
      currentTime,
      playId,
      playNext,
      playPrev,
      playCloudMusic,
      playMusic,
      playMusicById,
      songAl,
      BarPlay,
    };
  },

  {
    persist: true,
  }
);
