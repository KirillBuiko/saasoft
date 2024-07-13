<script setup lang="ts">
import {Account, AccountForm, AccountType, useAccountsStore} from "@/entities/account";
import {AccountRemoveButton} from "@/features/remove-account";

const accountsStorage = useAccountsStore();
const accounts = accountsStorage.getAccounts();

function onValueUpdate<K extends keyof Account>(idx: number, key: K, value: Account[K]) {
  accountsStorage.setValue(idx, key, value)
}

const titles = [
  "Метки",
  "Тип записи",
  "Логин",
  "Пароль",
  ""
]

</script>

<template>
  <div class="accounts-grid">
    <div class="accounts-grid__row accounts-grid__header">
      <h4 v-for="title in titles" :key="title"> {{ title }} </h4>
    </div>
    <div class="accounts-grid__row"
         :class="{'is-ldap': account.type==AccountType.LDAP}"
         v-for="(account, idx) in accounts" :key="idx">
      <AccountForm
          :account="account"
          @value-update="(key, value) => onValueUpdate(idx, key, value)"
      />
      <AccountRemoveButton :account-idx="idx"/>
    </div>
  </div>
</template>

<style lang="scss">
.accounts-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-x: auto;

  .accounts-grid__header {
    height: 30px;

    h4 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-inline: 5px;
      color: #888;
      height: 100%;
    }
  }

  .accounts-grid__row {
    display: grid;
    gap: 15px;
    grid-template-columns: minmax(200px, 2fr) minmax(100px, 1fr) minmax(200px, 1.7fr) minmax(200px, 1.5fr) 70px;
  }

  .accounts-grid__row.is-ldap .account-login {
    grid-column: 3 / 5;
  }
}
</style>
