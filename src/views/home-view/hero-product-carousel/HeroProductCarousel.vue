<script setup lang="ts">
import CarsService from '@/services/CarsService'
import type { Car } from '@/types/models/Car'
import SwiperHeroProductCarousel from './swiper-hero-product-carousel/SwiperHeroProductCarousel.vue'
import AppLinedTitleH2 from '@/components/titles/h2/AppLinedTitleH2.vue'
import ArrowNextCarouselNav from './buttons/ArrowNextCarouselNav.vue'
import ArrowPrevCarouselNav from './buttons/ArrowPrevCarouselNav.vue'
import { Swiper } from '@/assets/swiper/Swiper'
import { Slide } from '@/assets/swiper/Slide'
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
