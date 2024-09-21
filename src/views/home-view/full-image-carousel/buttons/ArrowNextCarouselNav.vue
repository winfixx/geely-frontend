<script setup lang="ts">
import ArrowNext from '@/components/icons/ArrowNext.vue'
import AppArrowCarouselNav from './AppArrowCarouselNav.vue'
</script>
<script lang="ts"></script>

<template>
  <AppArrowCarouselNav>
    <template #arrow>
      <ArrowNext color="#fff" />
    </template>
  </AppArrowCarouselNav>
</template>
