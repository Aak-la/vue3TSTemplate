<template>
  <div class="songCard-container">
    <div class="songCard-theCover">
      <img :src="picUrl" alt="" />
      <span class="songCard-theCover-bottom">
        <el-icon :size="16"><VideoPlay /></el-icon
        ><span class="text">{{ text }}播放量</span
        ><el-icon :size="16" class="Headset-icon"><Headset /></el-icon
      ></span>
    </div>
    <div class="songCard-descriptions">{{ des }}</div>
  </div>
</template>

<script setup lang="ts">
let { text, picUrl, des } = defineProps(["text", "picUrl", "des"]);
</script>

<style scoped lang="scss">
.songCard-container {
  margin: 10px 10px;
  .songCard-theCover {
    cursor: pointer;
    width: 139px;
    height: 139px;
    display: flex;
    align-items: end;
    justify-content: center;
  }
  img {
    width: 139px;
    z-index: 0;
    height: inherit;
    position: absolute;
  }
  .songCard-theCover-bottom {
    z-index: 01;
    width: 139px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    padding: 2px 5px;
    display: flex;
    .el-icon {
      vertical-align: middle;
    }
    .text {
      height: 16px;
      padding: 0;
      z-index: 099;
      font-size: 12px;
    }
    .Headset-icon {
      cursor: pointer;
    }
  }
  .songCard-descriptions {
    width: 139px;
    font-size: 1px;
    white-space: pre-wrap;
    height: auto;
  }
}
</style>