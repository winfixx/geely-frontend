<script setup lang="ts">
import { socialNetworks } from '@/assets/variables/socialNetworks/socialNetworks';

</script>

<template>
  <div class="socials-block">
    <p class="item-header">Социальные сети</p>
    <div>
      <a v-for="social in socialNetworks" :key="social.name" :href="social.url">
        <component :is="social.icon" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.socials-block {
  margin-bottom: 154px;
}
</style>
