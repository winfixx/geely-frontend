<template>
  <button class="hero-product-carousel_nav-button">
    <slot name="arrow" />
  </button>
</template>

<style scoped lang="scss">
.hero-product-carousel_nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: var(--button-slider-background-c);
  width: 58px;
  height: 58px;
  cursor: pointer;
}
</style>
