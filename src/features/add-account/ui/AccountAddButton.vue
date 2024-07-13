<script setup lang="ts">
import {useAccountsStore} from "@/entities/account";

const accountsStorage = useAccountsStore();

function onClick() {
  accountsStorage.addEmptyAccount();
}
</script>

<template>
  <v-btn variant="outlined" @click="onClick"> + </v-btn>
</template>

<style scoped lang="scss">

</style>
