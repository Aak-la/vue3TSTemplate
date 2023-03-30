<template>
  <div class="app">
    <el-container>
      <el-header><Header></Header> </el-header>
      <el-main><router-view></router-view></el-main>
      <!-- <el-footer><Footer></Footer></el-footer> -->
      <globalPlayer></globalPlayer>
    </el-container>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import globalPlayer from "@/components/globalPlayer.vue";

</script>
<style scoped lang="scss">
.el-header {
  background-color: #242424;
}
.el-main {
  padding: 0 !important;
  overflow: hidden;
}
</style>

