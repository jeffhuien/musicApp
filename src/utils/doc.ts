export let fee = {
  // '0': '暂无版权哦',
  '1': '此为VIP歌曲仅试听',
  '4': '购买专辑即可畅听',
  // 8: '非会员可免费播放低音质，会员可播放高音质及下载'
  '404': '亲爱的,暂无版权',
} as fee

interface fee {
  [key: string]: string
}
