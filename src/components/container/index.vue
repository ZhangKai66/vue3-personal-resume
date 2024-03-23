<template>
  <el-container>
    <el-aside width="auto">
      <nav-aside v-model:collapse="collapse"></nav-aside>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="collapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from "./navHeader/index.vue";
import NavAside from "./navAside/index.vue";
let collapse = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
