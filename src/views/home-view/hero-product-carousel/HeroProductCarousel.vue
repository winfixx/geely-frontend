<script setup lang="ts">
import AppLinedTitleH2 from '@/components/titles/h2/AppLinedTitleH2.vue'
import CarsService from '@/core/services/CarsService'
import type { Car } from '@/core/types/models/Car'
import { Swiper } from '@/core/types/models/Swiper'
import ArrowNextCarouselNav from './buttons/ArrowNextCarouselNav.vue'
import ArrowPrevCarouselNav from './buttons/ArrowPrevCarouselNav.vue'
import SwiperHeroProductCarousel from './swiper-hero-product-carousel/SwiperHeroProductCarousel.vue'
</script>
<script lang="ts">
const swipperSlideRefName = 'swipperSlideRefName'

export default {
  data(vm) {
    return {
      listCars: [] as Car[],
      currentSlidePx: 0,
      currentIndexSlide: 0,
      widthSlide: 0,
      swiper: new Swiper()
    }
  },
  async beforeCreate() {
    this.listCars = await CarsService.getCars()

    await this.$nextTick()

    const swiperSlideList = (this.$refs.childSwiperHeroProductCarousel as any)
      .$refs[swipperSlideRefName] as HTMLDivElement[]

    if (swiperSlideList && swiperSlideList.length) {
      const firstSwiperSlide = swiperSlideList[0]

      this.widthSlide =
        firstSwiperSlide.clientWidth + +firstSwiperSlide.style.marginLeft
    }
  },
  methods: {
    nextSlide() {
      this.swiper.nextSlide(this.$data, this.listCars)
    },
    prevSlide() {
      this.swiper.prevSlide(this.$data, this.listCars)
    }
  }
}
</script>

<template>
  <section class="hero-product-carousel">
    <AppLinedTitleH2 />

    <SwiperHeroProductCarousel
      ref="childSwiperHeroProductCarousel"
      :current-slide-px="currentSlidePx"
      :list-cars="listCars"
      :width-slide="widthSlide"
    />

    <div class="hero-product-carousel_nav-container">
      <ArrowPrevCarouselNav @click="prevSlide()" />
      <ArrowNextCarouselNav @click="nextSlide()" />
    </div>
  </section>
</template>

<style lang="scss">
.hero-product-carousel {
  padding: 10px 0 50px;
  overflow: hidden;

  .hero-product-carousel_nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 26px;
  }
}
</style>
