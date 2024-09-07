<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  text: string
  color: 'black' | 'blue'
}>()
</script>
<script lang="ts"></script>

<template>
  <a :class="['icon-link', color]" href="">
    <span class="button-text">{{ text }}</span>
    <slot name="icon"></slot>
  </a>
</template>

<style scoped lang="scss">
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 42px;
  background-color: rgb(236, 236, 236);
}

.blue {
  color: var(--color-text-icon-link-blue);
}

.black {
  color: var(--color-text-icon-link-black);
}
@media (width <= 1366px) {
  .icon-link.blue > .button-text {
    display: none;
  }
}
</style>
