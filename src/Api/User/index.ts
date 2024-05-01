import type { UserListReqType } from "#/List/userList";
import type { CloudSongType } from "#/song/cloudSong";
import type { G_RequestOptions } from "#/tools";
import Axios from "@/plugins/request/";
import { env, store } from "@/utils";

class Auth extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  public async getInfo(id: number) {
    return this.request<any>({
      url: `/detail`,
      params: {
        uid: id,
      },
    });
  }

  public async getLevel() {
    return this.request<any>({
      url: `/level`,
    });
  }

  public async getCloud(page: { limit: number; offset: number }) {
    return this.request<CloudSongType>({
      url: "/cloud",
      params: {
        ...page,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }

  public async getList(uid?: string) {
    return await this.request<UserListReqType>({
      url: "/playlist",
      params: {
        uid,
      },
    });
  }

  async getPlayUrl(id: string) {
    return await this.request<any>({
      baseURL: "/api/song/url",
      url: "",
      params: {
        id,
      },
      data: {
        cookie: store.get("cookie"),
      },
    });
  }
}

class Login extends Axios {
  constructor(config: G_RequestOptions) {
    super(config);
  }

  public async checkStatus(key: string) {
    return await this.request<any>({
      url: `/qr/check?key=${key}&timestamp=${Date.now()}`,
    });
  }

  public async getLoginStatus(cookie: string | null = "") {
    return await this.request<any>({
      url: `/status?timestamp=${Date.now()}`,
      data: {
        cookie,
      },
    });
  }

  public async login() {
    const { data } = await this.request<any>({
      url: `/qr/key?timestamp=${Date.now()}`,
    });
    let key = data.unikey;
    const res2 = await this.request<{
      code: number;
      data: { qrimg: string; qrurl: string };
    }>({
      url: `/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
    }); //返回二维码
    return { key, res2 };
  }

  public async logout() {
    return await this.request<any>({
      url: "",
      baseURL: "/api/logout",
      data: {
        cookie: store.get("cookie"),
      },
    });
  }
}

export const loginApi = new Login({
  url: "/api/login",
  method: "POST",
});
export const AuthApi = new Auth({
  url: "/api/user",
  method: "POST",
});
