<template>
  <div class="recommended-container">
    <div class="container-carousel">
      <el-carousel indicator-position="outside" v-loading="loading">
        <el-carousel-item
          v-for="item in recommendedData.bannerListData"
          :key="item"
        >
          <img :src="item.imageUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommended-list">
      <HotShowList
        v-if="recommendedData.data.length > 0"
        title="热门推荐"
        :navList="recommendedData"
        :songsTar="recommendedData.SongsData"
      ></HotShowList>
      <NewDiscShelves
        title="新碟上新"
        v-if="recommendedData.HotAlbumData.length > 0"
        :HotAlbumData="recommendedData.HotAlbumData"
      />
      <SongList title="榜单"></SongList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getBannerList } from "@/api/recommend";
import { getHotSong, getSongs, getHotAlbum, getTopList } from "@/api/song";
import HotShowList from "./Hot/showList.vue";
import NewDiscShelves from "./theNewDiscShelves/index.vue";
import SongList from "./SongList/index.vue";
import postman from "@/utils/BroadcastChannel";
let homeChannel = postman.createdChannel("home");
postman.sendMsg({ arr: [1234123] }, homeChannel);
const loading = ref<Boolean>(true);
let recommendedData = reactive<any>({
  data: [],
  SongsData: [],
  HotAlbumData: [],
  bannerListData: [],
});
console.log(recommendedData);
onBeforeMount(() => {
  getBanner();
  getHotSongs();
  getSongsData();
  getHotAlbumData();
  getTopListData();
});
const getBanner = async () => {
  getBannerList(6).then((res: any) => {
    recommendedData.bannerListData = res.banners;
    loading.value = false;
  });
};
const getHotSongs = async () => {
  getHotSong().then((res: any) => {
    if (res.code === 200) {
      recommendedData.data = res.tags.splice(0, 5);
    }
  });
};
const getSongsData = () => {
  getSongs(12).then((res: any) => {
    if (res.code === 200) {
      recommendedData.SongsData = res.result;
    }
  });
};
const getHotAlbumData = () => {
  getHotAlbum().then((res: any) => {
    if (res.code === 200) {
      recommendedData.HotAlbumData = res.albums.splice(0, 6);
    }
  });
};
const getTopListData = () => {
  getTopList(3).then((res) => {
    console.log(res);
  });
};
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.recommended-container {
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;
  min-width: 490px;

  .container-carousel {
    margin: 0 auto;
    width: 1000px;
    img {
      width: 100%;
      height: inherit;
    }
  }
  .recommended-list {
    overflow: hidden;
    .recommended-list-item {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}
</style>
