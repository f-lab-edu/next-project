import { MutableRefObject, Ref } from "react";

const setRef = <T>(node: T, ref?: Ref<T>) => {
  if (ref === null || ref === undefined) return;

  if (typeof ref === "function") {
    ref(node);
  } else {
    (ref as MutableRefObject<T>).current = node;
  }
};

export const mergeRefs = <T>(...refs: (Ref<T> | undefined | null)[]): ((node: T) => void) => {
  return (node: T) => {
    refs.forEach((ref) => {
      setRef(node, ref);
    });
  };
};
