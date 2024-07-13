export const ruleRequired = (value: string) => !!value || "Обязательное поле";
export const createMaxLengthRule =
    (length: number) =>
        (value: string) => value ? (value.length <= length || `Макс. длина ${length}`) : true;

export interface InputRules {
    length?: number,
    rules: ((value: string) => boolean | string)[]
}

export function checkValueWithRules(rules: InputRules, value: string): boolean | string {
    let message: (boolean | string) = true;
    rules.rules.some(rule => {
        const result = rule(value);
        if (result != true) {
            message = result;
            return true;
        }
    })
    return message;
}
