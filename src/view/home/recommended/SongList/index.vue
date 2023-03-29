<template>
  <div class="songList-container">
    <div class="songList-header">
      <el-icon :size="20" style="color: red"><Histogram /> </el-icon>
      <div class="songList-title">{{ title }}</div>
      <div class="songList-more">
        更多
        <el-icon style="color: red"><CaretRight /></el-icon>
      </div>
    </div>
    <div class="songList-list"></div>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps(["title"]);
</script>

<style scoped lang="scss">
.songList-container {
  padding: 10px;
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;
  min-width: 490px;
  box-sizing: border-box;
  .songList-header {
    user-select: none;
    display: flex;
    font-size: 20px;
    align-items: center;
    padding-bottom: 10px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 2px solid red;
    .songList-title {
      margin: 0 20px;
    }

    .songList-more {
      font-size: 13px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 20px;
    }
  }
}
</style>