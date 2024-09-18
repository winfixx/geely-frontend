<script setup lang="ts">
import FooterMenu from './footer-menu/FooterMenu.vue'
import FooterCopyright from './footer-copyright/FooterCopyright.vue'
</script>
<script lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer-container wrapper">
      <FooterMenu />

      <FooterCopyright />
    </div>
  </div>
</template>

<style lang="scss">
.item-header {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
}

.column-header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
<style scoped lang="scss">
.footer {
  background-color: var(--footer-background-c);

  * {
    color: var(--text-footer-color);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 40px;
  }
}
</style>
