import { snakeToCamelCase } from "./snake-to-camel-case";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const camelCaseObjMapper = <T extends Record<string, any>>(model: T) => {
  if (!model) return null;

  const newCamelCaseModel: Record<string, unknown> = {};

  for (const key of Object.keys(model)) {
    const currentModelValue = model[key];

    if (currentModelValue == null) {
      newCamelCaseModel[snakeToCamelCase(key)] = currentModelValue;
      continue;
    }

    if (Array.isArray(currentModelValue)) {
      const newArray = [];

      for (const item of currentModelValue) {
        switch (typeof item) {
          case "string":
            newArray.push(snakeToCamelCase(item));
            break;
          case "number":
            newArray.push(item);
            break;
          default:
            newArray.push(camelCaseObjMapper(item));
        }
      }

      newCamelCaseModel[snakeToCamelCase(key)] = newArray;
    } else {
      newCamelCaseModel[snakeToCamelCase(key)] =
        typeof currentModelValue === "object"
          ? camelCaseObjMapper(currentModelValue as Record<string, unknown>)
          : currentModelValue;
    }
  }

  return newCamelCaseModel as T;
};
