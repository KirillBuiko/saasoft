<script setup lang="ts">
import {AccountsHeader} from "@/widgets/accounts/accounts-header";
import {AccountsTagsHint} from "@/widgets/accounts/tags-hint";
import {AccountsList} from "@/widgets/accounts/accounts-list";

</script>

<template>
  <div class="accounts-page">
    <AccountsHeader/>
    <AccountsTagsHint/>
    <AccountsList/>
  </div>
</template>

<style scoped lang="scss">
.accounts-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
