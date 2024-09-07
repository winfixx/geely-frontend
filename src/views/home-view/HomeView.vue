<script setup lang="ts">
import CarsService from '@/services/CarsService'
import type { Car } from '@/types/models/Car'
import ArrowNextCarouselNav from './icons/ArrowNextCarouselNav.vue'
import ArrowPrevCarouselNav from './icons/ArrowPrevCarouselNav.vue'
import SwiperPagination from './swaper/swiper-pagination/SwiperPagination.vue'
import SwiperWrapper from './swaper/swiper-wrapper/SwiperWrapper.vue'
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      listCars: [] as Car[],
      myInnerWidth: window.innerWidth,
      currentSlidePx: 0,
      currentIndexSlide: 0,
      intervalIdSwiper: -1,
      intervalMsSwiper: 5000
    }
  },
  async mounted() {
    this.listCars = await CarsService.getCars()

    window.addEventListener('resize', this.onResize)

    this.intervalIdSwiper = setInterval(
      () => this.nextSlide(),
      this.intervalMsSwiper
    )
  },
  methods: {
    onResize() {
      this.myInnerWidth = window.innerWidth
    },
    nextSlide() {
      if (this.currentIndexSlide === this.listCars.length - 1) {
        this.currentIndexSlide = 0
        this.currentSlidePx = 0
      } else {
        this.currentIndexSlide++
        this.currentSlidePx -= this.myInnerWidth
      }
    },
    prevSlide() {
      if (this.currentIndexSlide === 0) {
        const maxIndex = this.listCars.length - 1

        this.currentIndexSlide = maxIndex
        this.currentSlidePx = -maxIndex * this.myInnerWidth
      } else {
        this.currentIndexSlide--
        this.currentSlidePx += this.myInnerWidth
      }
    },
    goToSlide(indexSlide: number) {
      this.currentIndexSlide = indexSlide
      this.currentSlidePx = -indexSlide * this.myInnerWidth
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
  <div class="page-main">
    <section class="full-image-carousel">
      <SwiperWrapper
        :current-slide-px="currentSlidePx"
        :list-cars="listCars"
        :my-inner-width="myInnerWidth"
      />

      <div class="full-image-carousel__navigation">
        <ArrowPrevCarouselNav @click="onPrevSlide()" />
        <SwiperPagination
          :list-cars="listCars"
          :current-index-slide="currentIndexSlide"
          :interval-ms-swiper="intervalMsSwiper"
          @go-to-slide="onGoToSlide"
        />
        <ArrowNextCarouselNav @click="onNextSlide()" />
      </div>
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
}
</style>
