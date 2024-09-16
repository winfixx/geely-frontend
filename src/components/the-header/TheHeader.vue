<script setup lang="ts">
import IconLinks from './list/IconLinks.vue'
import MenuWrapper from './list/MenuWrapper.vue'
import LogoHeader from './logo/LogoHeader.vue'
</script>
<script lang="ts"></script>

<template>
  <header class="header">
    <div class="header-container wrapper">
      <div class="header-main">
        <div class="header-left">
          <div class="button-mobile-menu"></div>
          <LogoHeader />
        </div>

        <div class="header-midle">
          <MenuWrapper />
        </div>

        <div class="header-right">
          <IconLinks />
        </div>
      </div>

      <div class="header-mobile"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-index-header);
  transition: all 0.5s ease-in-out;
  background: var(--default-background-c);

  * {
    font-size: 16px;
  }
  .header-container {
    padding: 0 40px;

    .header-main {
      display: flex;
      justify-content: space-between;
      height: var(--base-height-header);

      .header-left {
        display: flex;
        align-items: center;
      }

      .header-right {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
