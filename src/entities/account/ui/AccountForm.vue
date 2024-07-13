<script setup lang="ts">
import type {Account} from "@/entities/account/model/types";
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

watch(props.account, (V) => {
  Object.assign(inputBuffer, V);
  inputBuffer.tags = tagsToString(props.account.tags);
})

const typeItems = [{
  title: "Локальная",
  value: AccountType.LOCAL
}, {
  title: "LDAP",
  value: AccountType.LDAP
}]

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
</script>

<template>
<!-- TODO: refactor with input declarations (now meaningless) -->
  <v-text-field v-model="inputBuffer.tags"
                :rules="inputRules.tags.rules"
                :counter="inputRules.tags?.length as number"
                @blur="onSubmit('tags')"
                variant="outlined"
                placeholder="Значение"
                validate-on="blur"/>
  <v-select v-model="inputBuffer.type"
            variant="outlined"
            @update:model-value="onSubmit('type')"
            :items="typeItems"/>
  <v-text-field class="account-login"
                v-model="inputBuffer.login"
                :rules="inputRules.login.rules"
                :counter="inputRules.login?.length as number"
                @blur="onSubmit('login')"
                variant="outlined"
                placeholder="Значение"
                validate-on="blur"/>
  <v-text-field v-if="props.account.password !== null"
                v-model="inputBuffer.password"
                :rules="inputRules.password.rules"
                :counter="inputRules.password?.length as number"
                @blur="onSubmit('password')"
                variant="outlined"
                type="password"
                placeholder="Значение"
                validate-on="blur" />
</template>

<style scoped lang="scss">
.account-login {
  line-height: 10px;
}
</style>
