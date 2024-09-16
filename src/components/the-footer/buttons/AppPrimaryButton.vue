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
    background: #fff;
    color: #000 !important;
    padding: 10px 19px;
    font-size: 20px;
    border-radius: var(--base-button-border-radius);
  }
</style>
