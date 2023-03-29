<template>
  <div class="showList-container">
    <div class="showList-header">
      <el-icon :size="20" style="color: red"><Histogram /> </el-icon>
      <div class="showList-title">{{ title }}</div>

      <ul class="showList-nav">
        <li
          class="showList-nav-item"
          v-for="item in props.navList.data"
          :key="item"
          @click="selectClassify(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="showList-more">
        更多
        <el-icon style="color: red"><CaretRight /></el-icon>
      </div>
    </div>
    <div class="showList-content" v-if="props.songsTar.length > 0">
      <songCard
        :text="item.playCount"
        v-for="item in props.songsTar"
        :key="item.id"
        :picUrl="item.picUrl"
        :des="item.name"
      ></songCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import songCard from "./songCard.vue";

const props = defineProps(["title", "navList", "songsTar"]);

const selectClassify = (value: string) => {
  console.log(value);
};
</script>
<style scoped lang="scss">
.showList-container {
  padding: 10px;
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;
  min-width: 490px;
  box-sizing: border-box;
  .showList-header {
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
    .showList-title {
      margin: 0 20px;
    }
    .showList-nav {
      flex-grow: 1;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      .showList-nav-item {
        width: 60px;
        text-align: center;
        box-sizing: border-box;
        padding: 2px;
        font-size: 13px;
      }
      .showList-nav-item:hover {
        opacity: 0.6;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .showList-more {
      font-size: 13px;
      display: flex;
      align-items: center;
    }
    .showList-more:hover {
      opacity: 0.6;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .showList-content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
