<script setup lang="ts">
import SwiperPagination from '@/components/swaper/swiper-pagination/SwiperPagination.vue'
import CarsService from '@/services/CarsService'
import type { Car } from '@/types/models/Car'
import ArrowNextCarouselNav from '../icons/ArrowNextCarouselNav.vue'
import ArrowPrevCarouselNav from '../icons/ArrowPrevCarouselNav.vue'
import SwiperFullImageCarousel from './swiper-full-image-carousel/SwiperFullImageCarousel.vue'
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      listCars: [] as Car[],
      currentSlidePx: 0,
      widthSlide: window.innerWidth,
      currentIndexSlide: 0,
      intervalIdSwiper: -1,
      intervalMsSwiper: 5000
    }
  },
  async beforeCreate() {
    this.listCars = await CarsService.getCars()
  },
  async mounted() {
    window.addEventListener('resize', this.onResize)

    this.intervalIdSwiper = setInterval(
      () => this.nextSlide(),
      this.intervalMsSwiper
    )
  },
  methods: {
    onResize() {
      this.widthSlide = window.innerWidth
    },
    nextSlide() {
      if (this.currentIndexSlide === this.listCars.length - 1) {
        this.currentIndexSlide = 0
        this.currentSlidePx = 0
      } else {
      }
      this.currentIndexSlide++
      this.currentSlidePx -= this.widthSlide
    },
    prevSlide() {
      if (this.currentIndexSlide === 0) {
        const maxIndex = this.listCars.length - 1

        this.currentIndexSlide = maxIndex
        this.currentSlidePx = -maxIndex * this.widthSlide
      } else {
        this.currentIndexSlide--
        this.currentSlidePx += this.widthSlide
      }
    },
    goToSlide(indexSlide: number) {
      this.currentIndexSlide = indexSlide
      this.currentSlidePx = -indexSlide * this.widthSlide
    },
    onNextSlide() {
      clearInterval(this.intervalIdSwiper)

      this.nextSlide()
    },
    onPrevSlide() {
      clearInterval(this.intervalIdSwiper)

      this.prevSlide()
    },
    onGoToSlide(indexSlide: number) {
      clearInterval(this.intervalIdSwiper)

      this.goToSlide(indexSlide)
    }
  }
}
</script>

<template>
  <section class="full-image-carousel">
    <SwiperFullImageCarousel
      :current-slide-px="currentSlidePx"
      :list-cars="listCars"
      :width-slide="widthSlide"
    />

    <div class="full-image-carousel__navigation">
      <ArrowPrevCarouselNav @click="onPrevSlide()" />
      <SwiperPagination
        :list-cars="listCars"
        :current-index-slide="currentIndexSlide"
        :interval-ms-swiper="intervalMsSwiper"
        @go-to-slide="onGoToSlide"
      />
      <ArrowNextCarouselNav class="" @click="onNextSlide()" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.full-image-carousel {
  position: relative;
  overflow: hidden;
  height: calc(100vh - var(--base-height-header));

  .full-image-carousel__navigation {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 52px;
    left: 50%;
    z-index: var(--z-index-button-carousel-navigation);
  }
}
</style>
