<template>
  <div class="DiscShelves-container">
    <div class="DiscShelves-header">
      <el-icon :size="20" style="color: red"><Histogram /> </el-icon>
      <div class="DiscShelves-title">{{ title }}</div>

      <div class="DiscShelves-more">
        更多
        <el-icon style="color: red"><CaretRight /></el-icon>
      </div>
    </div>
    <div class="DiscShelves-content" v-if="props.HotAlbumData.length > 0">
      <songCard
        v-for="item in props.HotAlbumData"
        :key="item.id"
        :picUrl="item.blurPicUrl"
      ></songCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import songCard from "./songCard.vue";
const props = defineProps(["title", "HotAlbumData"]);
</script>
<style scoped lang="scss">
.DiscShelves-container {
  position: relative;
  padding: 10px;
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;
  min-width: 490px;
  box-sizing: border-box;
  .DiscShelves-header {
    user-select: none;
    display: flex;
    font-size: 20px;
    align-items: center;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 2px solid red;
    .el-icon {
      vertical-align: middle;
    }
    .DiscShelves-title {
      margin: 0 20px;
    }
    .DiscShelves-more {
      font-size: 13px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 10px;
    }
    .DiscShelves-more:hover {
      opacity: 0.6;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .DiscShelves-content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
