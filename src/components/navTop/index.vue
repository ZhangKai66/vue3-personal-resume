<template>
  <div class="top">
    <div class="title">Jarmacus</div>
    <ul class="list">
      <li>
        <a href="./blog">Blog</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Demos</a>
      </li>
      <li>
        <a href="">Thoughts</a>
      </li>
      <li>
        <a href="">Other</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: #aaa;

        &:hover {
          color: #777;
        }
      }
    }
  }
}
</style>
