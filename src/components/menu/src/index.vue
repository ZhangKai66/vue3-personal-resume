<template>
  <div>
    <el-menu
      class="menu-list"
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
    >
      <template v-for="(item, index) in menus" :key="index">
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :index="item.index"
        >
          <component
            v-if="item.icon"
            :is="`el-icon-${toLine(item.icon)}`"
          ></component>
          <span class="menu-title">{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu :index="item.index" v-else>
          <template #title
            ><span>{{ item.name }}</span></template
          >
          <el-menu-item
            v-for="(sub, index1) in item.children"
            :key="index1"
            :index="sub.index"
          >
            <component
              v-if="sub.icon"
              :is="`el-icon-${toLine(sub.icon)}`"
            ></component>
            <span class="menu-title">{{ sub.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, PropType } from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";
let props = defineProps({
  menus: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
  defaultActive: {
    type: String,
    default: "",
  },
  router: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.menu-list {
  // width: 140px;
  .menu-title {
    margin-left: 6px;
  }
}
</style>
