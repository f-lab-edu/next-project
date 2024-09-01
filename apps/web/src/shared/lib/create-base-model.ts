/**
 * https://github.com/microsoft/TypeScript/issues/26792#issuecomment-1820369784
 */
export const createBaseModel = <T>() => {
  return class {
    constructor(props: T) {
      Object.assign(this, props);
    }
  } as { new (args: T): Exclude<T, null | undefined> };
};
