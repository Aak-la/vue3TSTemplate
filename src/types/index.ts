export interface LinkItem {
  readonly id: number;
  readonly name: string;
  readonly path: string;
}

export type BannerType = 1 | 4 | 5 | 6;
export interface BannerData {
  imageUrl: string;
}
interface PlayData {
  id: number;
  name: string;
  copywriter?: string;
}
interface AlbumData {}
interface SingerData {}
interface RankData {}
export interface recommendedType {
  bannerListData: BannerData[];
  data: PlayData[];
  getSongsData: AlbumData[];
  HotAlbumData: SingerData[];
  rankList: RankData[];
}
export interface localCacheType {
  mode: string;
  expire: number;
}
