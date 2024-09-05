<script setup lang="ts">
import IconLink from '../links/IconLink.vue'
</script>
<script lang="ts"></script>

<template>
  <div class="icon-links">
    <IconLink text="Автомобили в наличии" color="black" />

    <IconLink text="Помощь на дорогах" color="black" />

    <IconLink text="Найти дилера" color="blue">
      <template #icon><MarkLocationIcon /></template>
    </IconLink>
    
    <IconLink text="Тест-драйв" color="blue">
      <template #icon><CarIcon /></template>
    </IconLink>
  </div>
</template>

<style scoped lang="scss">
.icon-links {
  display: flex;
  gap: 2px;
  font-size: 18px;
}
</style>
