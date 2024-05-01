import { playControl, playList } from "@/stores";
let times = 5;
class Music {
  private audio: UniApp.InnerAudioContext;
  constructor() {
    this.audio = uni.createInnerAudioContext();
  }

  async play(url: string): Promise<void> {
    if (this.audio.src === url) {
      this.audio.play();
    } else {
      this.audio.src = url;
      try {
        await this.audio.play();
      } catch (error) {
        if (times > 0) {
          console.log("retry~");
          playControl().playMusicById(playControl().playId);
          times--;
        } else {
          console.log("play error~");
          if (playList().playMode != "SingleLoop") {
            playControl().playNext();
          } else {
            // window.location.reload()
            uni.showModal({
              title: "提示",
              content: "播放失败，刷新试试吧~",
              showCancel: false,
            });
          }
          times = 5;
        }
      }
    }
    if (playControl().currentTime >= playControl().duration) playControl().currentTime = 0;
    this.setCurrentTime(playControl().currentTime);
    playControl().isPlay = true;
  }

  pause() {
    this.audio.pause();
    playControl().isPlay = false;
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;
  }

  setMuted() {
    // this.audio.muted = !this.audio.muted;
    console.log("muted:");
  }

  getCurrentTime(): number {
    return this.audio.currentTime;
  }

  getDuration(): number {
    return this.audio.duration;
  }

  setCurrentTime(arg0: number) {
    this.audio.currentTime = arg0;
  }

  addEventListener(event: string, callback: EventListenerOrEventListenerObject): void {
    // this.audio.addEventListener(event, callback);
    console.log(1234);
  }

  removeEventListener(event: string, callback: EventListenerOrEventListenerObject): void {
    // this.audio.removeEventListener(event, callback);
    console.log(1234);
  }
}

export const music = new Music();
