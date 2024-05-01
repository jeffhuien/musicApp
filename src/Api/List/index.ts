import type { ListSongs } from "#/List/ListSongs";
import type { UserListReqType } from "#/List/userList";
import type { G_RequestOptions } from "#/tools";
import Axios from "@/plugins/request/";
import { env, store } from "@/utils";

class List extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  public async getListDetail(id: string) {
    return await this.request<any>({
      url: "/detail",
      params: {
        id,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }
  public async getList(uid: string, page: { limit: number; offset: number } = { limit: 3, offset: 0 }) {
    return await this.request<UserListReqType>({
      url: "/api/user/playlist",
      params: {
        uid,
        ...page,
      },
    });
  }

  /**
   *
   * @param t 1 收藏，2 取消收藏
   * @param id 歌单id
   * @returns
   */
  public async collect(t: number, id: string) {
    return await this.request<any>({
      url: "/subscribe",
      params: {
        t,
        id,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  // TODO 分页获取
  public async getListSongs(id: string, page?: { limit: number; offset: number }) {
    return await this.request<ListSongs>({
      url: "/track/all",
      params: {
        id,
        ...page,
      },
    });
  }
}

const ListApi = new List({
  url: "/api/playlist",
  method: "POST",
});

export { ListApi };
