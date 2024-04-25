interface IData {
  expire?: number;
  token?: string;
  data?:
    | {
        name?: string;
      }
    | any;
}

export default {
  set(key: string, data: IData | any, expire?: number): any {
    let cache: IData = data;
    if (expire) cache.expire = new Date().getTime() + expire * (86400 * 1000); //expire天token
    uni.setStorage({
      key,
      data: JSON.stringify(cache),
    });
  },
  async get(key: string): Promise<IData | null | string | any> {
    let cacheStore;
    try {
      cacheStore = await uni.getStorage({ key });
      console.log(cacheStore);
      if (cacheStore) {
        const cache = JSON.parse(cacheStore.data) as IData;
        const expire = cache.expire;
        if (expire && expire < new Date().getTime()) {
          uni.removeStorage({ key });
          return null;
        }
        return cache;
      }
    } catch (error) {
      return "";
    }
  },
  remove(key: string) {
    uni.removeStorage({ key });
  },
};
