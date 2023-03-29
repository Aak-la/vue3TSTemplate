<template>
  <div class="songCard-container">
    <div class="songCard-theCover">
      <img :src="picUrl" alt="" />
    </div>
    <div class="songCard-descriptions"></div>
  </div>
</template>

<script setup lang="ts">
let { picUrl } = defineProps(["text", "picUrl"]);
</script>

<style scoped lang="scss">
.songCard-container {
  margin: 10px 10px;
  .songCard-theCover {
    cursor: pointer;
    width: 139px;
    height: 139px;
  }
  img {
    width: 139px;
    z-index: 0;
    height: inherit;
    position: absolute;
  }
}
</style>