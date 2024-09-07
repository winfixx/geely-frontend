<script setup lang="ts">
import type { Car } from '@/types/models/Car'
import { defineProps } from 'vue'

defineProps<{
  listCars: Car[]
  myInnerWidth: number
}>()
</script>
<script lang="ts"></script>

<template>
  <div
    v-for="car in listCars"
    :key="car.id"
    class="swipper-slide"
    :style="{ width: `${myInnerWidth}px` }"
  >
    <a
      :style="{ backgroundImage: `url(${car.image})` }"
      class="slide-content"
      href=""
    />
  </div>
</template>

<style scoped lang="scss">
.swipper-slide {
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: cover;
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
