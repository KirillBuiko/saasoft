import {defineStore} from "pinia";
import {useLocalStorage} from "@vueuse/core";
import type {Account} from "@/entities/account/model/types";
import {AccountType} from "@/entities/account/model/types";

export const useAccountsStore = defineStore("accounts-store", () => {
    const accounts =
        useLocalStorage<Account[]>("accounts", [], {
            listenToStorageChanges: false
        });

    if (accounts.value.length == 0) {
        addAccount({
            login: "123",
            tags: [
                {text: "qwerty"},
                {text: "yuiop"}
            ],
            type: AccountType.LOCAL,
            password: "password1"
        });
    }

    function getAccounts() {
        return accounts.value;
    }

    function addEmptyAccount() {
        addAccount({
            login: "",
            type: AccountType.LOCAL,
            tags: [],
            password: ""
        })
    }

    function addAccount(info: Account) {
        accounts.value.push(info);
    }

    function setValue<K extends keyof Account>(idx: number, key: K, value: Account[K]) {
        const account = accounts.value[idx];
        if (account) {
            if (key == "type") {
                account.password = value == AccountType.LDAP ? null : "";
            }
            accounts.value[idx][key] = value;
        }
    }

    function removeAccount(idx: number) {
        if (accounts.value[idx]) {
            accounts.value.splice(idx, 1);
        }
    }

    return {accounts, getAccounts, addEmptyAccount, addAccount, setValue, removeAccount}
})
