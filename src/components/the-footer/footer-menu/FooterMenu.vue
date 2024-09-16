<script setup lang="ts">
import FooterBase from './footer-base/FooterBase.vue'
import FooterColumns from './footer-columns/FooterColumns.vue'
</script>

<template>
  <div class="footer-menu">
    <FooterBase />

    <FooterColumns />
  </div>
</template>

<style scoped lang="scss">
.footer-menu {
  display: flex;
  width: 100%;
}
</style>
