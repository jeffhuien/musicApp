import type { G_RequestOptions } from "#/tools";
import Axios from "@/plugins/request/";

class MV extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  /**
   * 收藏mv
   * @param mvid
   * @param t 1收藏 2取消
   * @returns
   */
  public async collectMV(mvid: number, t: number) {
    return this.request<any>({
      url: "/sub",
      params: {
        mvid,
        t,
        timestamp: new Date().getTime(),
      },
    });
  }

  public async DetailMV(mvid: string) {
    return this.request<any>({
      url: "/detail",
      params: {
        mvid,
      },
    });
  }
  /**
   * MV地址
   * @param id
   * @param r 分辨率
   * @returns
   */
  public async PlayMV(id: string, r = 1080) {
    return this.request<any>({
      url: "/url",
      params: {
        id,
        r,
        timestamp: new Date().getTime(),
      },
    });
  }

  /**
   * area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
   * type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
   * order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
   * @param data
   * @param limit
   * @param offset
   * @returns
   */
  public async getAllMV(
    data?: {
      area?: string;
      order?: string;
      type?: string;
    },
    page?: { limit: number; offset: number }
  ) {
    return this.request<any>({
      url: "/all",
      params: {
        ...data,
        ...page,
      },
    });
  }

  public async NewMV(
    data?: {
      area?: string;
      order?: string;
      type?: string;
    },
    page?: { limit: number; offset: number }
  ) {
    return this.request<any>({
      url: "/first",
      params: {
        ...data,
        ...page,
      },
    });
  }

  /**
   * 网易出品
   * @param data
   * @param page
   * @returns
   */
  public async WangYiMV(
    data?: {
      area?: string;
      order?: string;
      type?: string;
    },
    page?: { limit: number; offset: number }
  ) {
    return this.request<any>({
      url: "/exclusive/rcmd",
      params: {
        ...data,
        ...page,
      },
    });
  }
  //   end
}
const MvApi = new MV({
  url: "/api/mv",
  method: "GET",
});

export { MvApi };
