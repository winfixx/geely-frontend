<script setup lang="ts">
import IconLinks from './list/IconLinks.vue'
import MenuWrapper from './list/MenuWrapper.vue'
import LogoHeader from './logo/LogoHeader.vue'
</script>
<script lang="ts"></script>

<template>
  <header class="header">
    <div class="header-main">
      <div class="header-left">
        <div class="button-mobile-menu"></div>
        <LogoHeader />
      </div>

      <div class="header-right">
        <IconLinks />

        <MenuWrapper />
      </div>
    </div>

    <div class="header-mobile"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-index-header);
  height: var(--base-height-header);
  transition: all 0.5s ease-in-out;
  background: var(--default-background-c);

  .header-main {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0 0 0 40px;

    .header-left {
      display: flex;
      align-items: center;
    }
  }
}
</style>
