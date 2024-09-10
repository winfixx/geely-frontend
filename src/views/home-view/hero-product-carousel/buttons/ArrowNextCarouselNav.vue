<script setup lang="ts">
import ArrowNext from '@/components/icons/ArrowNext.vue'
</script>
<script lang="ts"></script>

<template>
  <button class="hero-product-carousel_nav-button">
    <ArrowNext color="#fff" />
  </button>
</template>

<style scoped lang="scss">
.hero-product-carousel_nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: var(--button-background-c);
  width: 58px;
  height: 58px;
}
</style>
