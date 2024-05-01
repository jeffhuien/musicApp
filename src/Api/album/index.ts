import type { G_RequestOptions } from "#/tools";
import Axios from "@/plugins/request/";

class Album extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  /**
   * 收藏专辑
   * @param id 专辑id
   * @param t 1收藏 2取消
   * @returns
   */
  public async collectAlbum(id: string, t: number) {
    return this.request<any>({
      url: "/sub",
      method: "POST",
      params: {
        id,
        t,
        timestamp: new Date().getTime(),
      },
    });
  }

  /**
   * 获取专辑内容
   * @param id
   * @returns
   */
  public async getAlbum(id: string) {
    return this.request<any>({
      url: "",
      params: {
        id,
      },
    });
  }

  public async Detail(id: string) {
    return this.request<any>({
      url: "/detail/dynamic",
      params: {
        id,
        timestamp: new Date().getTime(),
      },
    });
  }

  //   end
}
export const AlbumApi = new Album({
  baseURL: "/api/album",
  url: "",
  method: "GET",
});
