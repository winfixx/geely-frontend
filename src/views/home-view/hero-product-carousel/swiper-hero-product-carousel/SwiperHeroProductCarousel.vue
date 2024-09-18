<script setup lang="ts">
import SwiperWrapper from '@/components/swaper/SwiperWrapper.vue'
import type { Car } from '@/core/types/models/Car'

defineProps<{
  currentSlidePx: number
  listCars: Car[]
  widthSlide: number
}>()
</script>
<script lang="ts"></script>

<template>
  <div>
    <SwiperWrapper
      :current-slide-px="currentSlidePx"
      class="swiper-wrapper__modify"
    >
      <template #swiper-slide>
        <div
          v-show="listCars && listCars.length"
          v-for="car in listCars"
          :key="car.id"
          class="swipper-slide swiper-hero-product"
          ref="swipperSlideRefName"
        >
          <a
            href=""
            class="slide-content"
            :style="{ backgroundImage: `url(${car.frontCarImage})` }"
          >
            <div class="slide-content-info">
              <h3 class="slide-title">{{ car.model }}</h3>
              <hr />
              <div class="slide-desc">{{ car.shortDescription }}</div>
            </div>

            <button class="gradient-button">Подробнее</button>
          </a>
        </div>
      </template>
    </SwiperWrapper>
  </div>
</template>

<style lang="scss">
.swipper-slide {
  flex-shrink: 0;
  cursor: pointer;

  &.swiper-hero-product {
    width: 332px;
    height: 630px;
    margin-left: 33px;

    .slide-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      padding-bottom: 30px;
      color: var(--default-color);

      .slide-content-info {
        padding: 21px 32px;
        background: var(--content-info-background-c);

        .slide-title {
          font-size: 38px;
          text-transform: uppercase;
        }

        hr {
          margin: 10px 0;
        }

        .slide-desc {
          line-height: 28px;
          font-size: 18px;
        }
      }

      .gradient-button {
        color: #fff;
        margin-top: auto;
        border: 1px solid currentColor;
        height: 44px;
        padding: 0 30px;
        margin-right: 30px;
        align-self: flex-end;
      }
    }
  }
}
</style>
