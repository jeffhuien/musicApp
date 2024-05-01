import type { RecommendListType, bannerType, historyListType, lyricType } from "#/index";
import type { G_RequestOptions } from "#/tools";
import Axios from "@/plugins/request/";
import { store } from "@/utils";

class Common extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  //首页轮播图
  public async getBannerImg() {
    return await this.request<bannerType>({
      url: "/banner?type=0",
    });
  }

  /**推荐歌单*/
  public async getLists(limit = 30) {
    return await this.request<RecommendListType>({
      url: "/personalized",
      params: {
        limit: 30,
      },
    });
  }
  /**精品歌单*/
  public async getHighQualityList(before?: string, limit = 10) {
    return await this.request<RecommendListType>({
      url: "/top/playlist/highquality",
      params: {
        before: before ? before : "",
        limit,
      },
    });
  }
  /**网友热碟*/
  public async getHOTList() {
    return await this.request<any>({
      url: "/top/playlist?limit=10&order=new",
    });
  }
  /**新歌速递*/
  public async getNEWSong() {
    return await this.request<any>({
      url: "/personalized/newsong",
    });
  }

  /**历史播放*/
  public async getHistoryList() {
    return await this.request<historyListType>({
      url: "/record/recent/song",
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async getLyric(id: number) {
    return await this.request<lyricType>({
      url: "/lyric",
      params: {
        id,
      },
    });
  }

  public async check(id: number | string) {
    return this.request<{ success: boolean }>({
      baseURL: "/check/music",
      url: "",
      params: {
        id,
      },
    });
  }
  // 喜欢音乐
  public async like(id: number, like?: boolean) {
    return this.request<{ success: boolean }>({
      url: "/like",
      params: {
        id,
        like,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  // 喜欢音乐
  public async likelist(id: number) {
    return this.request<{ ids: [] }>({
      url: "/likelist",
      params: {
        uid: id,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async followsList(uid: number) {
    return this.request<any>({
      url: "/user/follows",
      params: {
        uid,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async mvList(page?: { offset: number; limit: number }) {
    return this.request<any>({
      url: "/mv/sublist",
      params: {
        ...page,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async singerList() {
    return this.request<any>({
      url: "/artist/sublist",
      params: {},
      data: {
        cookie: store.get("cookie"),
      },
    });
  }
  public async singerSongs(id: number, page?: { limit: number; offset: number }) {
    return this.request<any>({
      url: "/artist/songs",
      params: {
        id,
        ...page,
      },
    });
  }
  public async singerAL(id: number, page?: { limit: number; offset: number }) {
    return this.request<any>({
      url: "/artist/album",
      params: {
        id,
        ...page,
      },
    });
  }
  public async singerDesc(id: number) {
    return this.request<any>({
      url: "/artist/desc",
      params: {
        id,
      },
    });
  }
  public async singerDetail(id: number) {
    return this.request<any>({
      url: "/artist/detail",
      params: {
        id,
      },
    });
  }

  public async singerFens(id: number) {
    return this.request<any>({
      url: "/artist/follow/count",
      params: {
        id,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async singerMV(id: number, page?: { limit: number; offset?: number }) {
    return this.request<any>({
      url: "/artist/mv",
      params: {
        id,
        ...page,
      },
    });
  }

  /**
   * 关注用户
   * @param id
   * @param t 1收藏 2取消
   * @returns
   */
  public async followUser(id: number, t: number) {
    return this.request<any>({
      url: "/follow",
      params: {
        id,
        t,
      },
    });
  }
  /**
   * 关注歌手
   * @param id
   * @param t
   * @returns
   */
  public async followSinger(id: number, t: number) {
    return this.request<any>({
      url: "/artist/sub",
      params: {
        id,
        t,
      },
    });
  }

  // /end/
}

const CommonApi = new Common({
  url: "/api/",
  method: "POST",
});

export { CommonApi };
