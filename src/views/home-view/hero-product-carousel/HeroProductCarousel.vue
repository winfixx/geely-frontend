<script setup lang="ts">
import CarsService from '@/services/CarsService'
import type { Car } from '@/types/models/Car'
import SwiperHeroProductCarousel from './swiper-hero-product-carousel/SwiperHeroProductCarousel.vue'
import AppLinedTitleH2 from '@/components/titles/h2/AppLinedTitleH2.vue'
import ArrowNextCarouselNav from './buttons/ArrowNextCarouselNav.vue'
import ArrowPrevCarouselNav from './buttons/ArrowPrevCarouselNav.vue'
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
      f: {
        a: 1
      }
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
      if (this.currentIndexSlide === this.listCars.length - 1) {
        this.currentIndexSlide = 0
        this.currentSlidePx = 0
      } else {
        this.currentIndexSlide++
        this.currentSlidePx -= this.widthSlide
      }
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
    }
  }
}
</script>

<template>
  <section class="hero-product-carousel">
    <button @click="listCars = []">sdfv</button>
    <AppLinedTitleH2 />

    <SwiperHeroProductCarousel
      ref="childSwiperHeroProductCarousel"
      :current-slide-px="currentSlidePx"
      :list-cars="listCars"
      :width-slide="widthSlide"
    />

    <!-- <div>
      <SwiperWrapper :current-slide-px="currentSlidePx">
        <template #swiper-slide>
          <div
            v-for="car in 11"
            :key="car"
            class="swipper-slide swiper-hero-product"
            ref="swipperSlideRefName"
            @click="console.log(widthSlide)"
          ></div>
        </template>
      </SwiperWrapper>
    </div> -->

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
}
</style>
