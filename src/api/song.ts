import { httpClient } from "./index";

// 获取热门歌单
export const getHotSong = async () => {
  return await httpClient.get("/playlist/hot");
};
//歌单分类
export const getSongClassif = async () => {
  return await httpClient.get("/playlist/catlist");
};
// 获取热门歌单
export const getSongs = async (limit: number) => {
  const res: any = await httpClient.get("/personalized", { limit });
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
  return httpClient.get("/album/newest");
};
//榜单
export const getTopList = (id: number) => {
  return httpClient.get("/top/list", { id });
};
//搜索
export const search = (keywords: string) => {
  return httpClient.get("/search", { keywords });
};
