<template>
  <button>
    <slot name="arrow" />
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
