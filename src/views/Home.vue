<template>
  <div class="content">
    <nav-top></nav-top>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import navTop from "../components/navTop/index.vue";
</script>

<style scoped lang="scss">
.content {
  padding: 20px 40px;
}
</style>
