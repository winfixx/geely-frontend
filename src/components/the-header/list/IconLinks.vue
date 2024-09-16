<script setup lang="ts">
import IconLink from '../links/IconLink.vue'
import MarkLocationIcon from '../icons/MarkLocationIcon.vue'
import CarIcon from '../icons/CarIcon.vue'
</script>
<script lang="ts"></script>

<template>
  <div class="icon-links">
    <IconLink text="Найти дилера" color="black">
      <template #icon><MarkLocationIcon /></template>
    </IconLink>

    <IconLink text="Тест-драйв" color="black">
      <template #icon><CarIcon /></template>
    </IconLink>
  </div>
</template>

<style scoped lang="scss">
.icon-links {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
}
</style>
