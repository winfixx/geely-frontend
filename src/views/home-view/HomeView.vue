<script setup lang="ts">
import ArrowNext from '@/components/icons/ArrowNext.vue'
import ArrowPrev from '@/components/icons/ArrowPrev.vue'
import SwiperWrapper from '@/components/swaper/SwiperWrapper.vue'
import AppLinedTitleH2 from '@/components/titles/h2/AppLinedTitleH2.vue'
import CarsService from '@/services/CarsService'
import type { Car } from '@/types/models/Car'
import FullImageCarousel from './full-image-carousel/FullImageCarousel.vue'
</script>
<script lang="ts">
const swipperSlideRefName = 'swipperSlideRefName'

export default {
  data(vm) {
    return {
      listCars: [] as Car[],
      currentSlidePx: 0,
      currentIndexSlide: 0,
      widthSlide: 0
    }
  },
  async beforeCreate() {
    this.listCars = await CarsService.getCars()
  },
  mounted() {
    const swiperSlideList = this.$refs[swipperSlideRefName] as HTMLDivElement[]

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
  <div class="page-main">
    <FullImageCarousel />

    <section class="hero-product-carousel">
      <AppLinedTitleH2 />

      <div>
        <SwiperWrapper :current-slide-px="currentSlidePx">
          <template #swiper-slide>
            <div
              v-for="car in listCars"
              :key="car.id"
              class="swipper-slide"
              ref="swipperSlideRefName"
              @click="console.log(widthSlide)"
            ></div>
          </template>
        </SwiperWrapper>
      </div>

      <div class="hero-product-carousel_nav-container">
        <button @click="prevSlide()" class="hero-product-carousel_nav-button">
          <ArrowPrev color="#fff" />
        </button>
        <button @click="nextSlide()" class="hero-product-carousel_nav-button">
          <ArrowNext color="#fff" />
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-main {
  padding-top: var(--base-height-header);

  .hero-product-carousel {
    padding: 10px 0 50px;
    overflow: hidden;

    .swipper-slide {
      flex-shrink: 0;
      height: 100px;
      width: 340px;
      background-color: black;
      margin-left: 33px;
      cursor: pointer;
    }

    .hero-product-carousel_nav-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 26px;

      .hero-product-carousel_nav-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-color: var(--button-background-c);
        width: 58px;
        height: 58px;
      }
    }
  }
}
</style>
