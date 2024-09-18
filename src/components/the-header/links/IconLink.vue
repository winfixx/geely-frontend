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
    <slot name="icon"></slot>
    <span class="button-text">{{ text }}</span>
  </a>
</template>

<style scoped lang="scss">
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--button-background-c);
}

.blue {
  color: var(--link-color);
}

.black {
  color: var(--default-color);
}

@media (width <= 1366px) {
  .icon-link.blue > .button-text {
    display: none;
  }
}
</style>
