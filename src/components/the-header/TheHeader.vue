<script setup lang="ts">
import CarIcon from './icons/CarIcon.vue'
import MarkLocationIcon from './icons/MarkLocationIcon.vue'
import IconLinks from './list/IconLinks.vue'
import MenuWrapper from './list/MenuWrapper.vue'
</script>
<script lang="ts"></script>

<template>
  <header class="header">
    <div class="header-main">
      <div class="header-left">
        <div class="button-mobile-menu"></div>
        <img
          class="logo"
          src="@/assets/images/logo/main-geely.logo.png"
          alt=""
        />
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

  .header-main {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0 0 0 40px;

    .header-left {
      display: flex;
      align-items: center;

      .logo {
        width: 250px;
        height: 35px;
      }
    }

    .header-right {
      
    }
  }
}
</style>
