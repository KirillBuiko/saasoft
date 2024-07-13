import {LocalAccount} from "@/entities/account";
import type {InputRules} from "@/shared/model/input-functions";
import {createMaxLengthRule, ruleRequired} from "@/shared/model/input-functions";

export const inputRules: { [key in keyof LocalAccount]: InputRules } = {
    tags: {
        length: 50,
        rules: [
            createMaxLengthRule(50)
        ]
    },
    type: {
        rules: [
            ruleRequired
        ]
    },
    login: {
        length: 100,
        rules: [
            ruleRequired,
            createMaxLengthRule(100)
        ]
    },
    password: {
        length: 100,
        rules: [
            ruleRequired,
            createMaxLengthRule(100)
        ]
    }
}
