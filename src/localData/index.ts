import { LinkItem } from "@/types/index";
export const navList: Array<LinkItem> = reactive([
  { id: 1, name: "推荐", path: "/home/recommended" },
  { id: 2, name: "歌单", path: "/home/song" },
  { id: 3, name: "歌手", path: "/home/singer" },
  { id: 4, name: "排行榜", path: "/home/list" },
  { id: 5, name: "新碟上架", path: "/home/shelves" },
]);
export const ShowListNavList: Array<LinkItem> = reactive([
  { id: 1, name: "华语", path: "/home/recommended" },
  { id: 2, name: "流行", path: "/home/song" },
  { id: 3, name: "摇滚", path: "/home/singer" },
  { id: 4, name: "民谣", path: "/home/list" },
  { id: 5, name: "电子", path: "/home/shelves" },
]);
