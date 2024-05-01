interface Account {
  id: string
  userName: string
  type: number
  status: number
  whitelistAuthority: number
  createTime: number
  tokenVersion: number
  ban: number
  baoyueVersion: number
  donateVersion: number
  vipType: number
  anonimousUser: boolean
  paidFee: boolean
}

interface Profile {
  userId: number
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature: string | null
  createTime: number
  userName: string
  accountType: number
  shortUserName: string
  birthday: number
  authority: number
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description: string | null
  detailDescription: string | null
  defaultAvatar: boolean
  expertTags: any // You can define a specific type if known
  experts: any // You can define a specific type if known
  djStatus: number
  locationStatus: number
  vipType: number
  followed: boolean
  mutual: boolean
  authenticated: boolean
  lastLoginTime: number
  lastLoginIP: string
  remarkName: string | null
  viptypeVersion: number
  authenticationTypes: number
  avatarDetail: any // You can define a specific type if known
  anchor: boolean
}

interface AuthType {
  data: {
    code: number
    account: Account
    profile: Profile
  }
}

export { AuthType, Account, Profile }
