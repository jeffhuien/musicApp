import _ from "lodash";
export function searchSongList<T>(copy: Ref<T[]>, w: string, data: Ref<T[]>) {
  copy.value = copy.value.filter((i: any) => i.name.toLowerCase().includes(w.toLowerCase()));
  if (copy.value.length === 0) console.log("没有找到相关歌曲");
  if (w.length === 0) copy.value = data.value;
}

export function sortSongList<T>(copy: Ref<T[]>, type: string, data: Ref<T[]>, asc: boolean) {
  if (type == "default") {
    copy.value = _.cloneDeep(data.value);
    return;
  }
  if (type == "time") {
    if (asc) {
      return copy.value.sort((a: any, b: any) => {
        return a.dt - b.dt;
      });
    } else {
      return copy.value.sort((a: any, b: any) => {
        return b.dt - a.dt;
      });
    }
  } else if (type == "name") {
    if (asc) {
      return copy.value.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      return copy.value.sort((a: any, b: any) => {
        return b.name.localeCompare(a.name);
      });
    }
  }
}
