<template>
  <div class="player-container">
    <audio ref="musicAudio" class="audio-component" controls preload="auto">
      <source ref="musicSource" type="audio/mpeg" />
    </audio>
    <div class="player-control">
      <div class="music-slider">
        <el-slider
          v-model="playTime"
          :format-tooltip="tooltipFormat"
          size="small"
          :max="sliderLength"
          @change="changePlayTime"
        />
      </div>
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
const musicAudio = ref(null);
const musicSource = ref(null);
const playTime = ref<number>(0.0);
const sliderLength = ref<number>(100);
const store = songState();
const { musicState } = storeToRefs(store);
let { SongHttp } = storeToRefs(store);
watch(
  () => store.$state.SongHttp,
  (val, newVal) => {
    var regexp = /\"/g;
    var text: any = val;
    var i = text.replace(regexp, "");
    //@ts-ignore
    musicSource.value.src = i;
    //@ts-ignore
    musicAudio.value.load();
    //@ts-ignore
    musicAudio.value.play();
  }
);
const start = () => {
  store.changeMusicState(true);
  //@ts-ignore
  musicAudio.value.play();
};
const stop = () => {
  if (SongHttp.value == undefined) {
    ElMessage({
      message: "请搜索要播放的歌曲",
      type: "warning",
    });
  } else {
    store.changeMusicState(false);
    //@ts-ignore
    musicAudio.value.pause();
  }
};
const tooltipFormat = (val: any) => {
  let strTime = playTime.value;
  let strMinute = parseInt(strTime / 60 + "");
  let strSecond = parseInt((strTime % 60) + "");
  return strMinute + ":" + strSecond;
};
const changePlayTime = (val: any) => {
  //@ts-ignore
  musicAudio.value.currentTime = val;
};
</script>
<style lang="scss" scoped>
.player-container {
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
  .audio-component {
    display: none;
    .music-slider {
      position: absolute;
      top: 20px;
      left: 120px;
      width: 50%;
    }
  }
}
</style>
  


  