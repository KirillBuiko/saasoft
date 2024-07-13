<script setup lang="ts">
import {useAccountsStore} from "@/entities/account";

const accountsStorage = useAccountsStore();

function onClick() {
  accountsStorage.addEmptyAccount();
}
</script>

<template>
  <v-btn variant="outlined"
         class="account-add-button"
         min-height="50px"
         min-width="150px"
         @click="onClick">
    +
  </v-btn>
</template>

<style scoped lang="scss">
.account-add-button {
  font-size: 25px;
}
</style>
