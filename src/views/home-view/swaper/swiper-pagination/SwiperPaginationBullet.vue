<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  numberBullet: number
  currentIndexSlide: number
  onGoToSlide: (indexSlide: number) => void
  intervalMsSwiper: number
}>()
</script>

<script lang="ts">
export default {
  data(vm) {
    return {}
  },
  computed: {
    isActive() {
      return this.currentIndexSlide === this.numberBullet - 1
    }
  }
}
</script>

<template>
  <span
    :class="['swiper-pagination-bullet', { isActive: isActive }]"
    @click="onGoToSlide(numberBullet - 1)"
  >
    <svg width="14" height="14" viewBox="0 0 14 14">
      <circle
        class="circle-progress"
        cx="7"
        cy="7"
        r="6.5"
        stroke-width="1px"
        transform="rotate(-90 7 7)"
        :style="{ animationDuration: `${intervalMsSwiper}ms` }"
      ></circle>
    </svg>
  </span>
</template>

<style scoped lang="scss">
.swiper-pagination-bullet {
  position: relative;
  background-color: #fff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;

  > svg {
    display: none;
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    .circle-progress {
      stroke: #fff;
      fill: none;
      animation-timing-function: linear;
      animation-name: progress;
      stroke-dasharray: 41;
      stroke-dashoffset: 0;
    }
  }
}
.isActive {
  transform: scale(1.5);

  > svg {
    display: block;
  }
}

@keyframes progress {
  0% {
    stroke-dashoffset: 41;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
