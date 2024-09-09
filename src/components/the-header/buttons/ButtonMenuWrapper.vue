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
  color: var(--button-menu-color);
  padding: 18px 47px;
  font-size: 18px;

  &:hover {
    color: var(--button-menu-hover-color);
  }

  &::after {
    display: block;
    position: absolute;
    bottom: 10px;
    left: calc((100% - 50px) / 2);
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
</style>
