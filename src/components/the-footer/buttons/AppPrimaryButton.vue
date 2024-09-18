<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<script lang="ts"></script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped lang="scss">
.button {
  max-width: 248px;
  width: 100%;
  height: 40px;
  text-align: center;
  background: #fff;
  color: #000 !important;
  padding: 0 19px;
  font-size: 12px;
  border-radius: var(--base-button-border-radius);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
