<script setup lang="ts">
import type { Car } from '@/core/types/models/Car'
import SwiperPaginationBullet from './SwiperPaginationBullet.vue'

defineProps<{
  listCars: Car[]
  currentIndexSlide: number
  onGoToSlide: (indexSlide: number) => void
  intervalMsSwiper: number
}>()
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      isActiveBullet: false
    }
  }
}
</script>

<template>
  <div class="swiper-pagination">
    <SwiperPaginationBullet
      v-for="numberBullet in listCars.length"
      :key="numberBullet"
      :number-bullet="numberBullet"
      :current-index-slide="currentIndexSlide"
      :interval-ms-swiper="intervalMsSwiper"
      @go-to-slide="onGoToSlide"
    />
  </div>
</template>

<style scoped lang="scss">
.swiper-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
