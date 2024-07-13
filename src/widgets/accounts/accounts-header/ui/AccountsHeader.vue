<script setup lang="ts">

import AccountAddButton from "@/features/add-account/ui/AccountAddButton.vue";
</script>

<template>
  <div class="accounts-header">
    <h1>Учётные записи</h1>
    <AccountAddButton/>
  </div>
</template>

<style scoped lang="scss">
.accounts-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}
</style>
