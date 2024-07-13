import {TagInfo} from "@/entities/account";

export function tagsToString(tags: TagInfo[]) {
    return tags.map((info) => info.text).join(";");
}

export function stringToTags(value: string): TagInfo[] {
    return value.split(';').map(text => ({text}));
}
