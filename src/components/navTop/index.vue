<template>
  <div class="top">
    <div class="title">Jarmacus</div>
    <el-menu mode="horizontal" :ellipsis="false" router default-active="1">
      <el-menu-item
        v-for="item in menusIndex"
        :key="item.path"
        :index="item.path"
        >{{ item.name }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const menusIndex = [
  {
    path: "/blog",
    name: "Blog"
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/demos",
    name: "Demos"
  },
  {
    path: "/thoughts",
    name: "Thoughts"
  },
  {
    path: "/others",
    name: "Others"
  }
];
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  .title {
    font-size: inherit;
  }
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
}
:deep(.el-menu--horizontal > .el-menu-item) {
  background-color: #fff;
  border-bottom: none;
  color: #91969f;
  font-size: 16px;
  &:hover {
    background-color: unset;
    color: rgb(55 65 81 / 1);
  }
  &.is-active {
    background-color: #fff;
    border-bottom: none;
    color: #91969f !important;
  }
}
</style>
