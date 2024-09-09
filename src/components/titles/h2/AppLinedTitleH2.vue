<template><h2 class="lined-title">Модели Geely</h2></template>

<style scoped lang="scss">
.lined-title {
  position: relative;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 50px;
  padding-bottom: 20px;
  color: var(--default-color);
  text-align: center;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: var(--default-color);
    content: '';
  }
}
</style>
