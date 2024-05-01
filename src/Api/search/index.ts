import type { Hot } from "#/search/hot";
import type { SearchSongs } from "#/search/searchSongs";
import type { searchSuggest } from "#/search/searchSuggest";
import Axios from "@/plugins/request";

class Search extends Axios {
  constructor(config: UniApp.RequestOptions) {
    super(config);
  }

  public async Suggest(keywords: string) {
    return await this.request<searchSuggest>({
      url: "/suggest",
      params: {
        keywords,
      },
    });
  }

  public async Hot() {
    return await this.request<Hot>({
      url: "/hot",
    });
  }

  public async SearchSongs(keywords: string) {
    return await this.request<SearchSongs>({
      url: "/cloudsearch",
      params: {
        keywords,
      },
    });
  }
}

const SearchApi = new Search({
  url: "/api/search",
  method: "GET",
});

export { SearchApi };
