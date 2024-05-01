/**
 * Request
 */
export interface getPlayUrl {
  code: number
  data: Datum[]
  [property: string]: any
}

export interface Datum {
  br: number
  canExtend: boolean
  channelLayout: null
  code: number
  effectTypes: null
  encodeType: string
  expi: number
  fee: number
  flag: number
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege
  freeTrialInfo: null
  freeTrialPrivilege: FreeTrialPrivilege
  gain: number
  id: number
  level: string
  md5: string
  payed: number
  peak: number
  podcastCtrp: null
  rightSource: number
  size: number
  time: number
  type: string
  uf: null
  url: string
  urlSource: number
  [property: string]: any
}

export interface FreeTimeTrialPrivilege {
  remainTime: number
  resConsumable: boolean
  type: number
  userConsumable: boolean
  [property: string]: any
}

export interface FreeTrialPrivilege {
  cannotListenReason: number
  listenType: number
  playReason: string[]
  resConsumable: boolean
  userConsumable: boolean
  [property: string]: any
}
