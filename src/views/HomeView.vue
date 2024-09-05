<script setup lang="ts">
import CarsService from '@/services/CarsService'
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      listCars: CarsService.getCars()
    }
  },
}
</script>

<template>
  <div class="page-main">
    <section class="full-image-carousel">
      <div class="swiper-wrapper"></div>
      <div class="full-image-carousel__navigation"></div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-main {
  padding-top: var(--base-height-header);

  .full-image-carousel {
    position: relative;
    overflow: hidden;
    height: calc(100vh - var(--base-height-header));

    .swiper-wrapper {
    }

    .full-image-carousel__navigation {
    }
  }
}
</style>
