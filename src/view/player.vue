<template>
  <div class="player-container">
    <div class="player-content">
      <div class="content-outer">
        <img
          src="https://img1.baidu.com/it/u=579108611,1930705942&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
          alt=""
          :class="musicState ? 'rotate' : ''"
        />
        <div class="content-in"></div>
      </div>
    </div>

    <div class="player-control">
      <div @click="start" v-if="!musicState">
        <svg-icon name="start" width="2em" height="2em" />
      </div>
      <div @click="stop" v-else>
        <svg-icon name="stop" width="2em" height="2em" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { songState } from "@/store/songPlayer";
const store = songState();
const { musicState } = storeToRefs(store);
let audio = new Audio(
  "https://music.163.com/song/media/outer/url?id=33894312.mp3"
);
const start = () => {
  store.changeMusicState(true);
  audio.play();
};
const stop = () => {
  store.changeMusicState(false);
  audio.pause();
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
  .player-control {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
