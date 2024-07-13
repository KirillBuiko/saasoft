<script setup lang="ts">
import {Account, useAccountsStore} from "@/entities/account";
import AccountForm from "@/entities/account/ui/AccountForm.vue";
import AccountRemoveButton from "@/features/remove-account/ui/AccountRemoveButton.vue";

const accountsStorage = useAccountsStore();
const accounts = accountsStorage.getAccounts();

function onValueUpdate<K extends keyof Account>(idx: number, key: K, value: Account[K]) {
  accountsStorage.setValue(idx, key, value)
}

</script>

<template>
  <div class="accounts-grid">
    <template v-for="(account, idx) in accounts" :key="idx">
      <AccountForm
          :account="account"
          @value-update="(key, value) => onValueUpdate(idx, key, value)"
      />
      <AccountRemoveButton :account-idx="idx"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .accounts-grid {

  }
</style>
