<script setup lang="ts">
import { footerColumns } from '@/assets/variables/footerColumns/footerColumns'
</script>

<template>
  <div class="footer-columns">
    <div v-for="column in footerColumns" :key="column.title">
      <div class="column-header">{{ column.title }}</div>

      <ul>
        <li v-for="(row, i) in column.column" :key="i">{{ row }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-columns {
  display: flex;
  justify-content: space-between;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;

    li {
      color: rgba(255, 255, 255, 0.6);
      font-size: 15px;
      transition: all ease 0.3s;
      cursor: pointer;

      &:hover {
        color: #8e9ca6;
      }
    }
  }
}
</style>
