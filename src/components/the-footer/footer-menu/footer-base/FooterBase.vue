<script setup lang="ts">
import AppPrimaryButton from '../../buttons/AppPrimaryButton.vue';
import SocialBlock from './SocialBlock.vue'
import SupportBlock from './SupportBlock.vue'
</script>

<template>
  <div class="footer-base">
    <SupportBlock />

    <SocialBlock />

    <AppPrimaryButton text="Подписаться на рассылку"/>
  </div>
</template>

<style scoped lang="scss">
.footer-base {
  display: flex;
  flex-direction: column;
  margin-right: 67px;
}
</style>
