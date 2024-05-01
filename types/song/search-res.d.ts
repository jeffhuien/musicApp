/**
 * searchRes
 */
export interface SearchRes {
  code: number
  result: Result
  [property: string]: any
}

export interface Result {
  searchQcReminder: null
  songCount: number
  songs: Song[]
  [property: string]: any
}

export interface Song {
  a: null
  al: Al
  alia: string[]
  ar: Ar[]
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: null
  djId: number
  dt: number
  entertainmentTags: null
  /**
   * enum,
   * 0: 免费或无版权
   * 1: VIP 歌曲
   * 4: 购买专辑
   * 8: 非会员可免费播放低音质，会员可播放高音质及下载
   * fee 为 1 或 8 的歌曲均可单独购买 2 元单曲
   */
  fee: number
  ftype: number
  h: H
  hr: null | Hr
  id: number
  l: L
  m: M
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  noCopyrightRcmd: null
  originCoverType: number
  originSongSimpleData: null | OriginSongSimpleData
  pop: number
  privilege: Privilege
  pst: number
  publishTime: number
  resourceState: boolean
  rt: null | string
  rtUrl: null
  rtUrls: string[]
  rtype: number
  rurl: null
  s_id: number
  single: number
  songJumpInfo: null
  sq: Sq
  st: number
  t: number
  tagPicList: null
  tns: string[]
  v: number
  version: number
  [property: string]: any
}

export interface Al {
  id: number
  name: string
  pic: number
  pic_str: string
  picUrl: string
  tns: string[]
  [property: string]: any
}

export interface Ar {
  alia: string[]
  alias: string[]
  id: number
  name: string
  tns: string[]
  [property: string]: any
}

export interface H {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}

export interface Hr {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}

export interface L {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}

export interface M {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}

export interface OriginSongSimpleData {
  albumMeta: AlbumMeta
  artists: Artist[]
  name: string
  songId: number
  [property: string]: any
}

export interface AlbumMeta {
  id: number
  name: string
  [property: string]: any
}

export interface Artist {
  id: number
  name: string
  [property: string]: any
}

export interface Privilege {
  chargeInfoList: ChargeInfoList[]
  cp: number
  cs: boolean
  dl: number
  dlLevel: string
  downloadMaxbr: number
  downloadMaxBrLevel: string
  fee: number
  fl: number
  flag: number
  flLevel: string
  freeTrialPrivilege: FreeTrialPrivilege
  id: number
  maxbr: number
  maxBrLevel: string
  payed: number
  pl: number
  playMaxbr: number
  playMaxBrLevel: string
  plLevel: string
  preSell: boolean
  rightSource: number
  rscl: null
  sp: number
  st: number
  subp: number
  ElMessage: boolean
  [property: string]: any
}

export interface ChargeInfoList {
  chargeMessage: null
  chargeType: number
  chargeUrl: null
  rate: number
  [property: string]: any
}

export interface FreeTrialPrivilege {
  cannotListenReason: number
  listenType: number
  resConsumable: boolean
  userConsumable: boolean
  [property: string]: any
}

export interface Sq {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}
