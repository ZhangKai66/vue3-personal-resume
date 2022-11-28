<template>
  <el-header style="padding-top: 20px">
    <span @click="toggleCollapse">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </el-header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});
let emits = defineEmits(["update:collapse"]);

// const toggleCollapse = ref<any>();
// toggleCollapse.value = () => {
//   emits("update:collapse", !props.collapse);
// };
const toggleCollapse = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
  margin-right: 8px;
}
</style>
