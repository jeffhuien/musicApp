export interface ListDetail {
  code: number
  fromUserCount: number
  fromUsers: null
  playlist: Playlist
  privileges: Privilege[]
  relatedVideos: null
  resEntrance: null
  sharedPrivilege: null
  songFromUsers: null
  urls: null
  [property: string]: any
}

export interface Playlist {
  adType: number
  algTags: string[]
  backgroundCoverId: number
  backgroundCoverUrl: null
  bannedTrackIds: null
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  copied: boolean
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: Creator
  description: string
  englishTitle: null
  gradeStatus: string
  highQuality: boolean
  historySharedUsers: null
  id: number
  mvResourceInfos: null
  name: string
  newImported: boolean
  officialPlaylistType: null
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  relateResType: null
  remixVideo: null
  score: null
  shareCount: number
  sharedUsers: null
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: string[]
  tags: string[]
  titleImage: number
  titleImageUrl: null
  trackCount: number
  trackIds: TrackId[]
  trackNumberUpdateTime: number
  tracks: Track[]
  trackUpdateTime: number
  trialMode: number
  updateFrequency: null
  updateTime: number
  userId: number
  videoIds: null
  videos: null
  [property: string]: any
}

export interface Creator {
  accountStatus: number
  anchor: boolean
  authenticationTypes: number
  authority: number
  authStatus: number
  avatarDetail: null
  avatarImgId: number
  avatarImgId_str: string
  avatarImgIdStr: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr: string
  backgroundUrl: string
  birthday: number
  city: number
  defaultAvatar: boolean
  description: string
  detailDescription: string
  djStatus: number
  experts: null
  expertTags: null
  followed: boolean
  gender: number
  mutual: boolean
  nickname: string
  province: number
  remarkName: null
  signature: string
  userId: number
  userType: number
  vipType: number
  [property: string]: any
}

export interface TrackId {
  alg: null
  at: number
  f: null
  id: number
  rcmdReason: string
  sc: null
  sr: null
  t: number
  uid: number
  v: number
  [property: string]: any
}

export interface Track {
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
  hr: Hr
  id: number
  l: L
  m: M
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  noCopyrightRcmd: null | NoCopyrightRcmd
  originCoverType: number
  originSongSimpleData: null
  pop: number
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
  tns?: string[]
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
  vd: number
  [property: string]: any
}

export interface Hr {
  br: number
  fid: number
  size: number
  vd: number
  [property: string]: any
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  [property: string]: any
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  [property: string]: any
}

export interface NoCopyrightRcmd {
  expInfo: null
  songId: null
  thirdPartySong: null
  type: number
  typeDesc: string
  [property: string]: any
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
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
  paidBigBang: boolean
  payed: number
  pc: null
  pl: number
  playMaxbr: number
  playMaxBrLevel: string
  plLevel: string
  preSell: boolean
  realPayed: number
  rightSource: number
  rscl: null
  sp: number
  st: number
  subp: number
  toast: boolean
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
  cannotListenReason: number | null
  listenType: null
  playReason: null
  resConsumable: boolean
  userConsumable: boolean
  [property: string]: any
}
