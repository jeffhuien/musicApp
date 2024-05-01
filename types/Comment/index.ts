import { Song } from '../song/songInfo'
import { MusicComment } from './MusicComment'
import { SongListComment } from './SongListComment'

export interface CommentType {
  info?: Song
  MusicComment?: MusicComment
  SongListComment?: SongListComment
}
