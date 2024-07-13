<script setup lang="ts">

import HintIcon from "@/shared/ui/icons/HintIcon.vue";
</script>

<template>
  <div class="hint-label">
    <HintIcon class="icon"/>
    <span class="hint-label__text">
      <slot/>
    </span>
  </div>
</template>

<style scoped lang="scss">
.hint-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding-inline: 8px;
  border: 1px solid #333;
  border-radius: 20px;
  background: #fcfcfc;

  .icon {
    flex: 0 0 auto;
  }

  .hint-label__text {

  }
}
</style>
