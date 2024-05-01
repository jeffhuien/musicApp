/**
 * Request
 */
export interface searchSuggest {
  code: number
  result: Result
  [property: string]: any
}

export interface Result {
  albums: AlbumElement[]
  order: string[]
  playlists: Playlist[]
  songs: Song[]
  [property: string]: any
}

export interface AlbumElement {
  artist: PurpleArtist
  copyrightId: number
  id: number
  mark: number
  name: string
  picId: number
  publishTime: number
  size: number
  status: number
  [property: string]: any
}

export interface PurpleArtist {
  albumSize: number
  alia?: string[]
  alias: string[]
  fansGroup: null
  id: number
  img1v1: number
  img1v1Url: string
  name: string
  picId: number
  picUrl: string
  trans: null
  [property: string]: any
}

export interface Playlist {
  action: null
  actionType: null
  bookCount: number
  coverImgUrl: string
  creator: null
  description: string
  highQuality: boolean
  id: number
  name: string
  officialTags: null
  playCount: number
  recommendText: null
  score: null
  specialType: number
  subscribed: boolean
  trackCount: number
  userId: number
  [property: string]: any
}

export interface Song {
  album: SongAlbum
  alias: string[]
  artists: ArtistElement[]
  copyrightId: number
  duration: number
  fee: number
  ftype: number
  id: number
  mark: number
  mvid: number
  name: string
  rtype: number
  rUrl: null
  status: number
  transNames?: string[]
  [property: string]: any
}

export interface SongAlbum {
  alia?: string[]
  artist: FluffyArtist
  copyrightId: number
  id: number
  mark: number
  name: string
  picId: number
  publishTime: number
  size: number
  status: number
  [property: string]: any
}

export interface FluffyArtist {
  albumSize: number
  alias: string[]
  fansGroup: null
  id: number
  img1v1: number
  img1v1Url: string
  name: string
  picId: number
  picUrl: null
  trans: null
  [property: string]: any
}

export interface ArtistElement {
  albumSize: number
  alias: string[]
  fansGroup: null
  id: number
  img1v1: number
  img1v1Url: string
  name: string
  picId: number
  picUrl: null
  trans: null
  [property: string]: any
}
