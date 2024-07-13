<script setup lang="ts">
const props = defineProps<{
  accountIdx: number
}>()

import {useAccountsStore} from "@/entities/account";

const accountsStorage = useAccountsStore();

function onClick() {
  if (props.accountIdx != undefined) {
    accountsStorage.removeAccount(props.accountIdx);
  }
}
</script>

<template>
  <v-btn icon="mdi-trash-can-outline" variant="outlined" @click="onClick"/>
</template>

<style scoped lang="scss">
.account-remove-button {
  width: 20px;
  padding: 0;
}
</style>
