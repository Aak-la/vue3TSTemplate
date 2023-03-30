<template>
  <div class="player-container">
    <div class="player-content">
      <div class="search">
        <input type="text" v-model="searchWord" /><button @click="searchSong">
          搜索
        </button>
      </div>
      <div class="content-outer">
        <img
          src="https://img1.baidu.com/it/u=579108611,1930705942&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
          alt=""
          :class="musicState ? 'rotate' : ''"
        />
        <div class="content-in"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { search } from "@/api/song";
import { songState } from "@/store/songPlayer";
let searchWord = ref<string>("ok歌");
const store = songState();
const { musicState } = storeToRefs(store);

const searchSong = () => {

  if (searchWord.value == null) return;
  search(searchWord.value)
    .then((res: any) => {
      let id = res.result.songs[0].id;
      store.setSongUrl(getUrl(id));
      store.changeMusicState(true);
    })
    .catch((err) =>
      ElMessage({
        message: "有错误发生",
        type: "warning",
      })
    );
};
const getUrl = (id: number) => {
  return ` "https://music.163.com/song/media/outer/url?id=${id}.mp3"`;
};
</script>

<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.rotate {
  animation: rotate 10s linear infinite;
}
.player-container {
  .player-content {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    .content-outer {
      margin-top: 70px;
      width: 400px;
      height: 400px;
      background-color: aliceblue;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: inherit;
        position: absolute;

        user-select: none;
      }
      .content-in {
        width: 100px;
        height: 100px;
        background-color: #ffff;
        border-radius: 50%;
        z-index: 99;
      }
    }
  }
}
</style>
