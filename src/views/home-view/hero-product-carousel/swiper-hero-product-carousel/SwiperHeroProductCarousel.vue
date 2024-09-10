<script setup lang="ts">
import { defineProps } from 'vue'
import SwiperWrapper from '@/components/swaper/SwiperWrapper.vue'
import type { Car } from '@/types/models/Car'

defineProps<{
  currentSlidePx: number
  listCars: Car[]
  widthSlide: number
}>()
</script>
<script lang="ts"></script>

<template>
  <div>
    <SwiperWrapper :current-slide-px="currentSlidePx">
      <template #swiper-slide>
        <div
          v-show="listCars && listCars.length"
          v-for="car in listCars"
          :key="car.id"
          class="swipper-slide swiper-hero-product"
          ref="swipperSlideRefName"
          @click="console.log(widthSlide)"
        ></div>
      </template>
    </SwiperWrapper>
  </div>
</template>

<style lang="scss">
.swipper-slide {
  flex-shrink: 0;
  height: 100px;
  width: 340px;
  background-color: black;
  cursor: pointer;

  &.swiper-hero-product {
    margin-left: 33px;
  }
}
</style>
