interface CloudSongType {
  data: CloudSongsData[]
  count: number //共计歌曲
  size: string //已用容量（B字节）
  maxSize: string //共计容量
  code: number
  [property: string]: any
}

interface CloudSongsData {
  simpleSong: CloudSongDataType
  fileSize: number
}

interface CloudSongDataType {
  name: string
  id: number
  fee: number
  /**
   * 歌手信息
   */
  ar: { id: number; name: string; tns: [any]; alias: [any] }[]
  /**
   * 专辑信息
   */
  al: {
    id: string
    name: string
    picUrl: string
  }
  dt: number //时长
  [property: string]: any
}

export type { CloudSongType, CloudSongDataType, CloudSongsData }
