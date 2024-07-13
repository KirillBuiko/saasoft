<script setup lang="ts">

</script>

<template>
  <div class="layout-middle__wrapper">
    <div class="layout-middle">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Basic layout without media queries

.layout-middle__wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  align-items: center;
  padding-inline: 100px;
  padding-block: 20px;

  .layout-middle {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-inline: 40px;
    padding-block: 40px;
    background: white;
    border: 1px solid black;
    border-radius: 5px;
    flex: 1 auto;
  }
}
</style>
