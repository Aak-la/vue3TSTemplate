import { httpClient } from "./index";
import { GET_HOT_PLAYLIST, GET_BANNERS } from "./requestType";
import { BannerType } from "@/types/index";

export const getBannerList = async (type: BannerType) => {
  return await httpClient.get(GET_BANNERS, { type });
};

export const httpGetHotPlayList = async (limit: number) => {
  const res: any = await httpClient.get(GET_HOT_PLAYLIST, { limit });
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
