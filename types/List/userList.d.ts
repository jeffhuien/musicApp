/**
 * Request
 */
export interface UserListReqType {
  code: number
  more: boolean
  playlist: Playlist[]
  version: string
  [property: string]: any
}

export interface Playlist {
  adType: number
  anonimous: boolean
  artists: null
  backgroundCoverId: number
  backgroundCoverUrl: null
  cloudTrackCount: number
  commentThreadId: string
  copied: boolean
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: Creator
  description: null | string
  englishTitle: null
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: null
  sharedUsers: null
  shareStatus: null
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: string[]
  tags: string[]
  titleImage: number
  titleImageUrl: null
  top: boolean
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  tracks: null
  trackUpdateTime: number
  updateFrequency: null
  updateTime: number
  userId: number
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
