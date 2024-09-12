<script setup lang="ts">
import SwiperPagination from '@/components/swaper/swiper-pagination/SwiperPagination.vue'
import CarsService from '@/core/services/CarsService'
import type { Car } from '@/core/types/models/Car'
import SwiperFullImageCarousel from './swiper-full-image-carousel/SwiperFullImageCarousel.vue'
import ArrowPrevCarouselNav from './buttons/ArrowPrevCarouselNav.vue'
import ArrowNextCarouselNav from './buttons/ArrowNextCarouselNav.vue'
import { Swiper } from '@/core/types/models/Swiper'
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
      intervalMsSwiper: 5000,
      swiper: new Swiper()
    }
  },
  async beforeCreate() {
    this.listCars = await CarsService.getCars()
  },
  async mounted() {
    window.addEventListener('resize', this.onResize)

    this.intervalIdSwiper = setInterval(
      () => this.swiper.nextSlide(this.$data, this.listCars),
      this.intervalMsSwiper
    )
  },
  methods: {
    onResize() {
      this.widthSlide = window.innerWidth
    },
    onNextSlide() {
      clearInterval(this.intervalIdSwiper)

      this.swiper.nextSlide(this.$data, this.listCars)
    },
    onPrevSlide() {
      clearInterval(this.intervalIdSwiper)

      this.swiper.prevSlide(this.$data, this.listCars)
    },
    onGoToSlide(indexSlide: number) {
      clearInterval(this.intervalIdSwiper)

      this.swiper.goToSlide(this.$data, indexSlide)
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
