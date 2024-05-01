export interface MusicComment {
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
  beReplied: CommentBeReplied[]
  commentId: number
  commentLocationType: number
  content: string
  contentResource: null
  decoration: { [key: string]: any }
  expressionUrl: null
  grade: null
  ipLocation: CommentipLocation
  liked: boolean
  likedCount: number
  needDisplayTime: boolean
  owner: boolean
  parentCommentId: number
  pendantData: null | PurplePendantData
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

export interface CommentBeReplied {
  beRepliedCommentId: number
  content: string
  expressionUrl: null
  ipLocation: PurpleipLocation
  richContent: null
  status: number
  user: PurpleUser
  [property: string]: any
}

export interface PurpleipLocation {
  ip: null
  location: string
  userId: null
  [property: string]: any
}

export interface PurpleUser {
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
  userId: null
  [property: string]: any
}

export interface PurplePendantData {
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
  associator: PurpleAssociator
  musicPackage: PurpleMusicPackage
  redplus: null | Redplus
  redVipAnnualCount: number
  redVipLevel: number
  relationType: number
  [property: string]: any
}

export interface PurpleAssociator {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface PurpleMusicPackage {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface Redplus {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface HotComment {
  beReplied: HotCommentBeReplied[]
  commentId: number
  commentLocationType: number
  content: string
  contentResource: null
  decoration: { [key: string]: any }
  expressionUrl: null
  grade: null
  ipLocation: HotCommentipLocation
  liked: boolean
  likedCount: number
  needDisplayTime: boolean
  owner: boolean
  parentCommentId: number
  pendantData: null | FluffyPendantData
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

export interface HotCommentBeReplied {
  beRepliedCommentId?: number
  content?: string
  expressionUrl?: null
  ipLocation?: FluffyipLocation
  richContent?: null
  status?: number
  user?: FluffyUser
  [property: string]: any
}

export interface FluffyipLocation {
  ip: null
  location: string
  userId: null
  [property: string]: any
}

export interface FluffyUser {
  anonym: number
  authStatus: number
  avatarDetail: UserAvatarDetail
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

export interface UserAvatarDetail {
  identityIconUrl: string
  identityLevel: number
  userType: number
  [property: string]: any
}

export interface HotCommentipLocation {
  ip: null
  location: string
  userId: null
  [property: string]: any
}

export interface FluffyPendantData {
  id: number
  imageUrl: string
  [property: string]: any
}

export interface HotCommentUser {
  anonym: number
  authStatus: number
  avatarDetail: null | AvatarDetailAvatarDetail
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

export interface AvatarDetailAvatarDetail {
  identityIconUrl: string
  identityLevel: number
  userType: number
  [property: string]: any
}

export interface UserVipRights {
  associator: FluffyAssociator
  musicPackage: FluffyMusicPackage
  redplus: null
  redVipAnnualCount: number
  redVipLevel: number
  relationType: number
  [property: string]: any
}

export interface FluffyAssociator {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}

export interface FluffyMusicPackage {
  iconUrl: string
  rights: boolean
  vipCode: number
  [property: string]: any
}
