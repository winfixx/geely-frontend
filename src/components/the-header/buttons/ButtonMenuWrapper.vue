<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  text: string
}>()
</script>
<script lang="ts"></script>

<template>
  <button class="button__menu-wrapper" href="">{{ text }}</button>
</template>

<style scoped lang="scss">
.button__menu-wrapper {
  border: none;
  background: none;
  position: relative;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: var(--button-menu-hover-color);
  }

  &::after {
    display: block;
    position: absolute;
    bottom: 0px;
    left: calc((100% - 40px) / 2);
    width: 0;
    border-top: 2px solid transparent;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    content: '';
  }

  &:hover::after {
    width: 50px;
    border-top-color: var(--button-menu-hover-color);
  }
}

@media (width <= 1366px) {
  .button__menu-wrapper {
    padding: 0 0 0 10px;
    font-size: 14px !important;
  }
}
</style>
