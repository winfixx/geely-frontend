<script setup lang="ts">
import type { Car } from '@/types/models/Car'
import { defineProps } from 'vue'
import SwiperSlide from '../swiper-slide/SwiperSlide.vue'

defineProps<{
  listCars: Car[]
  myInnerWidth: number
  currentSlidePx: number
}>()
</script>
<script lang="ts"></script>

<template>
  <div
    class="swiper-wrapper"
    :style="{ transform: `translateX(${currentSlidePx}px)` }"
  >
    <SwiperSlide :list-cars="listCars" :my-inner-width="myInnerWidth" />
  </div>
</template>

<style scoped lang="scss">
.swiper-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: 0.25s all linear;
  transform: translateX(0);
}
</style>
