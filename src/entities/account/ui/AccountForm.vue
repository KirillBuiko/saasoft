<script setup lang="ts">
import type {Account, TagInfo} from "@/entities/account/model/types";
import {computed} from "vue";
import {AccountType} from "@/entities/account/model/types";

const props = defineProps<{
  account: Account
}>()

const emits = defineEmits<{
  <K extends keyof Account>(e: "value-update", key: K, value: Account[K]): void
}>()

const tagsString = computed(() => {
  return props.account.tags.map((info) => info.text).join(";");
})

const typeStrings = [{
  title: "Локальная",
  value: AccountType.LOCAL
},{
  title: "LDAP",
  value: AccountType.LDAP
}]

function onValueUpdate(key: keyof Account, value: string) {
  emits("value-update", key, value);
}

function onAccountTagsUpdate(value: string) {
  const tagsArray: TagInfo[] = value.split(';').map(text => ({text}));
  emits("value-update", "tags", tagsArray);
}
</script>

<template>
  <v-text-field :model-value="tagsString"
                @update:model-value="onAccountTagsUpdate"/>
  <v-select :model-value="props.account.type"
            @update:model-value="(value) => onValueUpdate('type', value)"
            :items="typeStrings"/>
  <v-text-field :model-value="props.account.login"
                @update:model-value="(value) => onValueUpdate('login', value)"/>
  <v-text-field v-if="props.account.password !== null"
                :model-value="props.account.password"
                @update:model-value="(value) => onValueUpdate('password', value)"/>
</template>

<style scoped lang="scss">

</style>
