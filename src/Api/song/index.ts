// import { getPlayUrl } from "#/song/get-url";
// import { songInfo } from "#/song/songInfo";
import type { SongUrlType } from "#/song/songUrl";
import GHttp from "@/plugins/request";

class Song extends GHttp {
  constructor(config: UniApp.RequestOptions) {
    super(config);
  }

  public async getSongUrl(id: number | string) {
    return this.request<SongUrlType>({
      url: `/url/v1?id=${id}&level=standard`,
    });
  }
}

const SongApi = new Song({
  url: "/song",
  method: "POST",
});

export { SongApi };
