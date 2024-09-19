import type { IItem } from "~/interfaces/item";

export function deepest(obj: IItem): string[] {
  let props = Object.entries(obj);
  let result: null | string[] = [];
  while (props.length) {
    let [key, val] = props.pop();
    if (typeof val == 'object' && !Array.isArray(val)) {
      props.unshift(...Object.entries(val).reverse());
      continue;
    }

    result.push(val.toString());
  }
  return result;
}
