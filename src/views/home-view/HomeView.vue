<script setup lang="ts">
import AppLinedTitleH2 from '@/components/titles/h2/AppLinedTitleH2.vue'
import FullImageCarousel from './full-image-carousel/FullImageCarousel.vue'
import SwiperWrapper from '@/components/swaper/SwiperWrapper.vue'
import ArrowPrev from '@/components/icons/ArrowPrev.vue'
import ArrowNext from '@/components/icons/ArrowNext.vue'
import { ref } from 'vue'

const slideRef = ref()
</script>
<script lang="ts">
export default {
  data(vm) {
    return {
      currentSlidePx: 0
    }
  },
  methods: {}
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
              v-for="n in 10"
              :key="n"
              class="swipper-slide"
              :ref="slideRef"
            ></div>
          </template>
        </SwiperWrapper>
      </div>

      <div class="hero-product-carousel_nav-container">
        <button class="hero-product-carousel_nav-button">
          <ArrowPrev color="#fff" />
        </button>
        <button class="hero-product-carousel_nav-button">
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
