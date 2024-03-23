<template>
  <div class="content">
    <nav-top></nav-top>
    <router-view class="main"></router-view>
  </div>
</template>

<script lang="ts" setup>
import navTop from "../components/navTop/index.vue";
</script>

<style scoped lang="scss">
.content {
  padding: 10px 40px;
  font-family: "LXGWWenKaiGBFusion-Regular_1";
}
.main {
  height: calc(100vh - 78px);
}
</style>
