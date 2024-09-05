<script setup lang="ts">
import ButtonMenuWrapper from '../buttons/ButtonMenuWrapper.vue'
</script>

<template>
  <div class="menu-wrapper">
    <ButtonMenuWrapper text="Модели"/>
    <ButtonMenuWrapper text="Покупателям"/>
    <ButtonMenuWrapper text="Владельцам"/>
    <ButtonMenuWrapper text="О Geely"/>
  </div>
</template>

<style scoped lang="scss">
.menu-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 40px;
}
</style>
