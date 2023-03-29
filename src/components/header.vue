<template>
  <div class="header-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-width"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      :router="true"
      background-color="#242424"
      text-color="#FFFFFF"
    >
      <el-menu-item index="0"
        ><img :src="logo" alt="" class="logo-img"
      /></el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="/home/recommended">发现音乐</el-menu-item>
      <el-menu-item index="/player">我的音乐</el-menu-item>
      <el-menu-item index="2-2">关注</el-menu-item>
      <el-menu-item index="2-3">商城</el-menu-item>
      <el-menu-item index="2-4">音乐人</el-menu-item>
      <el-menu-item index="2-5">下载客户端</el-menu-item>
    </el-menu>
    <div class="darkBtn">
      <el-icon :size="20" v-if="theme"><Sunny /></el-icon>
      <el-icon :size="20" v-else style="color: white"><Moon /></el-icon>
      <el-switch inline-prompt v-model="theme" @click="toggle()"></el-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toggle } from "@/hook/useDark";
import logo from "@/assets/img/logo.png";
const theme = ref<boolean>(false);
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style  lang="scss">
.header-container {
  box-sizing: border-box;
  padding: 0 160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-menu-width {
    min-width: 390px;
    overflow: hidden;
    width: 95%;
    user-select: none;
    .flex-grow {
      flex-grow: 1;
    }
    .logo-img {
      display: block;
      width: 40px;
      height: 40px;
    }
  }
  .darkBtn {
    line-height: 60px;
    min-width: 60px;
    .el-icon {
      vertical-align: middle;
    }
  }
}
</style>