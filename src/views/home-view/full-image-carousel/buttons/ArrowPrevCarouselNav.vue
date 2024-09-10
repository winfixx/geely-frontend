<script setup lang="ts">
import ArrowPrev from '@/components/icons/ArrowPrev.vue'
</script>
<script lang="ts"></script>

<template>
  <button>
    <ArrowPrev color="#fff"/>
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
}
</style>
