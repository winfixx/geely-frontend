<script setup lang="ts">
import TheHeader from '@/components/the-header/TheHeader.vue'
import { RouterView } from 'vue-router'
import TheFooter from './components/the-footer/TheFooter.vue';
</script>

<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<style scoped></style>
