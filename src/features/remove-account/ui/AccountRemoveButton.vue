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
  <v-btn variant="outlined" @click="onClick"> - </v-btn>
</template>

<style scoped lang="scss">

</style>
