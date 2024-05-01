import type { getPlayUrl } from "#/song/get-url";
import type { songInfo } from "#/song/songInfo";
import GHttp from "@/plugins/request";

class Song extends GHttp {
  constructor(config: UniApp.RequestOptions) {
    super(config);
  }

  public async getSongUrl(id: number | string) {
    return this.request<getPlayUrl>({
      url: `/url/v1?id=${id}&level=standard`,
    });
  }

  public async check(id: number | string) {
    return this.request<{ success: boolean }>({
      url: `/check/music?id=${id}`,
    });
  }

  public async getSongDetail(id: number | string) {
    return this.request<songInfo>({
      url: `/detail?ids=${id}`,
    });
  }
}

const SongApi = new Song({
  url: "/song",
  method: "POST",
});

export { SongApi };
