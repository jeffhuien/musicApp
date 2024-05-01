export interface Hot {
  code: number
  result: Result
  [property: string]: any
}

export interface Result {
  hots: HotElement[]
  [property: string]: any
}

export interface HotElement {
  first: string
  iconType: number
  second: number
  third: null
  [property: string]: any
}
