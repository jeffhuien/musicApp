import { playControl } from '@/stores'

window.onkeydown = (e) => {
  if (e.key == ' ') {
    playControl().isPlay = !playControl().isPlay
  }
}
