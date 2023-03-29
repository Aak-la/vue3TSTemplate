<template>
  <div class="home-container">
    <div class="home-nav">
      <ul class="home-nav-ul">
        <li
          v-for="item in navList"
          :key="item.id"
          @click="goToPage(item.path)"
          class="ui-item"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
  <script setup lang="ts">
import { navList } from "@/localData/index";
const router = useRouter();
const goToPage = (path: string) => {
  router.push({ path: path });
};
</script>
  <style scoped lang="scss">
.home-container {
  .home-nav {
    background-color: #c20c0c;
    position: relative;
    .home-nav-ul {
      width: 900px;
      margin: 0 auto;
      display: flex;
      list-style: none;
      color: #ffff;
      .ui-item {
        flex-grow: 1;
        text-align: center;
        font-size: 14px;
        padding: 9px;
        cursor: pointer;
      }
      .ui-item:hover {
        color: #ffff;
        opacity: 0.8;
      }
    }
  }
}
</style>