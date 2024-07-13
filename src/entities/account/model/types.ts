export type TagInfo = {
    text: string
}

export enum AccountType {
    LOCAL = "Local",
    LDAP = "LDAP"
}

export interface BaseAccount {
    tags: TagInfo[]
    login: string
}

export interface LocalAccount extends BaseAccount {
    type: AccountType.LOCAL,
    password: string,
}

export interface LDAPAccount extends BaseAccount {
    type: AccountType.LDAP,
    password: null,
}

export type Account = LocalAccount | LDAPAccount;


// TODO: it can be replaced in shared with project scaling

export type SelectItem = {
    title: string,
    value: string
}

export type FormDescriptor<K> = {
    [ind in keyof K]:
    { class: string } & (
    { type: "input", placeholder: string } |
    { type: "select", items: SelectItem[] })
}
