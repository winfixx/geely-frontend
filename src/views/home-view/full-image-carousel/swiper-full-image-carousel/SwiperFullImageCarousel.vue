<script setup lang="ts">
import SwiperWrapper from '@/components/swaper/SwiperWrapper.vue'
import type { Car } from '@/types/models/Car'
import { defineProps } from 'vue'

defineProps<{
  currentSlidePx: number
  listCars: Car[]
  widthSlide: number
}>()
</script>
<script lang="ts"></script>

<template>
  <SwiperWrapper :current-slide-px="currentSlidePx">
    <template #swiper-slide>
      <div
        v-for="car in listCars"
        :key="car.id"
        class="swipper-slide"
        :style="{ width: `${widthSlide}px` }"
      >
        <a
          :style="{ backgroundImage: `url(${car.image})` }"
          class="slide-content"
          href=""
        />
      </div>
    </template>
  </SwiperWrapper>
</template>

<style scoped lang="scss">
.swipper-slide {
  flex-shrink: 0;
  height: 100%;

  .slide-content {
    display: block;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
