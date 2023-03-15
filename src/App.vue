<template>
  <div class="app">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="demo">
      <div>这是一个深色模式的切换demo</div>
      <el-switch inline-prompt v-model="theme" @click="toggle()"> </el-switch>
    </div>
  </div>
</template>
<script setup lang="ts">
/* import { ref } from "vue"; */
import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";
const theme = ref<boolean>(false);

const isDark = useDark({
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});

const toggle = useToggle(isDark);
</script>
<style  scoped lang="scss">
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
.demo {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

