import { music as Music } from "./Audio";
import { fee } from "./doc";
import env from "./env";
import store from "./store";

// import { playMusic, playMusicById } from '@/utils/play'

/**
 *
 * @param time ms | min
 * @returns 00:00
 * @example formatTime(130)=>02:10
 */
function formatTime(time: number, type: "ms" | "min" = "min") {
  if (type == "ms") time = time / 1000;

  return `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(time % 60)
    .toString()
    .padStart(2, "0")}`;
}

//获取设备尺寸
function getDeviceSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width, height };
}
//获取设备尺寸，是移动设备就返回true
function getIsMobile() {
  if (getDeviceSize().width < 768) {
    return true;
  }
  return false;
}

let timer: number;
function setDocumentTitle(title: string) {
  if (timer) clearInterval(timer);
  if (document && title.length > 10) {
    let t: string = title + `   `;

    timer = setInterval(function () {
      let start = t.substring(0, 1);
      let end = t.substring(1);
      t = end + start;
      document.title = t;
    }, 800);
  } else {
    document.title = title;
  }
}

export {
  //
  Music,
  env,
  fee,
  formatTime,
  getDeviceSize,
  getIsMobile,
  setDocumentTitle,
  store,
};

export * from "./buttonBar";
