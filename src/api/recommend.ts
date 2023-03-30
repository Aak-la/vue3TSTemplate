import { httpClient } from "./index";
import { BannerType } from "@/types/index";

export const getBannerList = async (type: BannerType) => {
  return await httpClient.get("/banner", { type });
};

export const httpGetHotPlayList = async (limit: number) => {
  const res: any = await httpClient.get("/playlist/hot", { limit });
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
