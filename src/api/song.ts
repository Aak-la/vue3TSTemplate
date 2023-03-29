import { httpClient } from "./index";
import {
  GET_HOT_PLAYLIST,
  GET_PLAYLIST_CATLIST,
  Get_Hot_SONG,
  GET_HOT_ALBUM,
  GET_RANK_LIST,
} from "./requestType";
// 获取热门歌单
export const getHotSong = async () => {
  return await httpClient.get(GET_HOT_PLAYLIST);
};
//歌单分类
export const getSongClassif = async () => {
  return await httpClient.get(GET_PLAYLIST_CATLIST);
};
// 获取热门歌单
export const getSongs = async (limit: number) => {
  const res: any = await httpClient.get(Get_Hot_SONG, { limit });
  return {
    ...res,
    result: res.result.map((item: any) => {
      return {
        ...item,
        coverImgUrl: item.picUrl,
      };
    }),
  };
};
//新碟上架
export const getHotAlbum = () => {
  return httpClient.get(GET_HOT_ALBUM);
};
//榜单
export const getTopList = (id: number) => {
  return httpClient.get(GET_RANK_LIST, { id });
};
