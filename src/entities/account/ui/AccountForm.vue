<script setup lang="ts">
import type {Account, FormDescriptor} from "@/entities/account/model/types";
import {AccountType} from "@/entities/account/model/types";
import {reactive, watch} from "vue";

import {checkValueWithRules} from "@/shared/model/input-functions";
import {inputRules} from "@/entities/account/model/input-rules";
import {stringToTags, tagsToString} from "@/entities/account/model/helpers";

const props = defineProps<{
  account: Account
}>()

const emits = defineEmits<{
  <K extends keyof Account>(e: "value-update", key: K, value: Account[K]): void
}>()

const inputBuffer = reactive<Record<keyof Account, string | null>>({
  ...props.account,
  tags: tagsToString(props.account.tags)
})

watch(props, (V) => {
  Object.assign(inputBuffer, V.account);
  inputBuffer.tags = tagsToString(V.account.tags);
})

function onSubmit(key: keyof Account) {
  const value = inputBuffer[key];
  if (value == null || checkValueWithRules(inputRules[key], value) !== true) return;
  if (key == "tags") {
    emits("value-update", "tags", stringToTags(value));
  } else {
    inputBuffer[key] = value as AccountType;
    emits("value-update", key, value);
  }
}

const fieldsDescriptor: FormDescriptor<Account> = {
  tags: {class: "account-tags", type: "input", placeholder: "Значение"},
  type: {
    class: "account-type",
    type: "select",
    items: [
      {title: "Локальная", value: AccountType.LOCAL},
      {title: "LDAP", value: AccountType.LDAP}
    ]
  },
  login: {class: "account-login", type: "input", placeholder: "Значение"},
  password: {class: "account-password", type: "input", placeholder: "Значение"}
}
</script>

<template>
  <template v-for="(value, key) in fieldsDescriptor" :key="key">
    <v-select v-if="value.type == 'select'"
              :class="{[value.class]: true}"
              v-model="inputBuffer[key]"
              variant="outlined"
              @update:model-value="onSubmit('type')"
              :items="value.items"/>
    <v-text-field v-if="value.type == 'input' && inputBuffer[key] !== null"
                  :class="{[value.class]: true}"
                  v-model="inputBuffer[key]"
                  :rules="inputRules[key].rules"
                  :counter="inputRules[key].length as number"
                  @blur="onSubmit(key)"
                  variant="outlined"
                  :type="key == 'password' ? 'password' : 'text'"
                  :placeholder="value.placeholder"
                  validate-on="blur"/>
  </template>
</template>

<style scoped lang="scss">
.account-login {
  line-height: 10px;
}
</style>
