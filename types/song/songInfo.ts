export interface songInfo {
  code: number
  privileges: Privilege[]
  songs: Song[]
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
  listenType: null
  resConsumable: boolean
  userConsumable: boolean
  [property: string]: any
}

export interface Song {
  a: null
  al: Al
  alia: string[]
  ar: Ar[]
  awardTags: null
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: null
  djId: number
  dt: number
  entertainmentTags: null
  fee: number
  ftype: number
  h: H
  hr: null
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
  originSongSimpleData: null
  pop: number
  pst: number
  publishTime: number
  resourceState: boolean
  rt: null
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
  v: number
  version: number
  [property: string]: any
}

export interface Al {
  id: number
  name: string
  pic: number
  picUrl: string
  tns: string[]
  [property: string]: any
}

export interface Ar {
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

export interface Sq {
  br: number
  fid: number
  size: number
  sr: number
  vd: number
  [property: string]: any
}
