<template>
  <m-menu :collapse="collapse" :menus="menus" router></m-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MenuItem } from "../../components/menu/src/types";
let props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});

const menus = ref<MenuItem[]>([
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "Location",
    name: "省市区选择",
    index: "/chooseArea",
  },
  {
    icon: "Check",
    name: "测试父元素",
    index: "/testIcon",
    children: [
      {
        name: "测试子元素1",
        index: "/testIconSon1",
      },
      {
        name: "测试子元素2",
        index: "/testIconSon2",
      },
    ],
  },
]);
</script>

<style scoped lang="scss"></style>
