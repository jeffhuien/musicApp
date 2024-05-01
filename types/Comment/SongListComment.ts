export interface SongListComment {
  code: number
  commentBanner: null
  comments: Comment[]
  hotComments: HotComment[]
  isMusician: boolean
  more: boolean
  moreHot: boolean
  topComments: string[]
  total: number
  userId: number
  [property: string]: any
}

export interface Comment {
  beReplied: BeReplied[]
  commentId: number
  commentLocationType: number
  content: string
  contentResource: null
  decoration: { [key: string]: any } | null
  expressionUrl: null
  grade: null
  ipLocation: CommentipLocation
  liked: boolean
  likedCount: number
  needDisplayTime: boolean
  owner: boolean
  parentCommentId: number
  pendantData: null | PendantData
  repliedMark: null
  richContent: null
  showFloorComment: null
  status: number
  time: number
  timeStr: string
  user: CommentUser
  userBizLevels: null
  [property: string]: any
}

export interface BeReplied {
  beRepliedCommentId: number
  content: string
  expressionUrl: null
  ipLocation: BeRepliedipLocation
  richContent: null
  status: number
  user: BeRepliedUser
  [property: string]: any
}

export interface BeRepliedipLocation {
  ip: null
  location: string
  userId: null
  [property: string]: any
}

export interface BeRepliedUser {
  anonym: number
  authStatus: number
  avatarDetail: null
  avatarUrl: string
  commonIdentity: null
  experts: null
  expertTags: null
  followed: boolean
  liveInfo: null
  locationInfo: null
  mutual: boolean
  nickname: string
  remarkName: null
  socialUserId: null
  target: null
  userId: number
  userType: number
  vipRights: null
  vipType: number
  [property: string]: any
}

export interface CommentipLocation {
  ip: null
  location: string
  userId: number | null
  [property: string]: any
}

export interface PendantData {
  id: number
  imageUrl: string
  [property: string]: any
}

export interface CommentUser {
  anonym: number
  authStatus: number
  avatarDetail: null
  avatarUrl: string
  commonIdentity: null
  experts: null
  expertTags: null
  followed: boolean
  liveInfo: null
  locationInfo: null
  mutual: boolean
  nickname: string
  remarkName: null
  socialUserId: null
  target: null
  userId: number
  userType: number
  vipRights: null | VipRightsVipRights
  vipType: number
  [property: string]: any
}

export interface VipRightsVipRights {
  associator: null | Associator
  musicPackage: null | MusicPackage
  redplus: null
  redVipAnnualCount: number
  redVipLevel: number
  relationType: number
  [property: string]: any
}

export interface Associator {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface MusicPackage {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface HotComment {
  beReplied: string[]
  commentId: number
  commentLocationType: number
  content: string
  contentResource: null
  decoration: null | Decoration
  expressionUrl: null
  grade: null
  ipLocation: HotCommentipLocation
  liked: boolean
  likedCount: number
  needDisplayTime: boolean
  owner: boolean
  parentCommentId: number
  pendantData: null
  repliedMark: null
  richContent: null
  showFloorComment: null
  status: number
  time: number
  timeStr: string
  user: HotCommentUser
  userBizLevels: null
  [property: string]: any
}

export interface Decoration {
  repliedByAuthorCount: number
  [property: string]: any
}

export interface HotCommentipLocation {
  ip: null
  location: string
  userId: null
  [property: string]: any
}

export interface HotCommentUser {
  anonym: number
  authStatus: number
  avatarDetail: null
  avatarUrl: string
  commonIdentity: null
  experts: null
  expertTags: null
  followed: boolean
  liveInfo: null
  locationInfo: null
  mutual: boolean
  nickname: string
  remarkName: null
  socialUserId: null
  target: null
  userId: number
  userType: number
  vipRights: UserVipRights
  vipType: number
  [property: string]: any
}

export interface UserVipRights {
  associator: null
  musicPackage: null
  redplus: null
  redVipAnnualCount: number
  redVipLevel: number
  relationType: number
  [property: string]: any
}
