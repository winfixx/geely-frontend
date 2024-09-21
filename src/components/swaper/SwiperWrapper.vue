<script setup lang="ts">
defineProps<{
  currentSlidePx: number
}>()
</script>
<script lang="ts"></script>

<template>
  <div
    class="swiper-wrapper"
    :style="{ transform: `translateX(${currentSlidePx}px)` }"
  >
    <slot name="swiper-slide"></slot>
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
