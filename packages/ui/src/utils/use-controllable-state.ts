import { Dispatch, useCallback, useState } from "react";

export interface UseControllableStateParams<T> {
  /**
   * controlled state
   */
  value?: T;
  /**
   * uncontrolled state
   */
  defaultValue?: T | (() => T);
  /**
   *
   * @param value 변경된 state
   * @returns
   */
  onChange?: (value: T) => void;
}

export type SetStateAction<T> = ((prevValue?: T) => T) | T;

function isStateActionFunction<T>(value: SetStateAction<T>): value is (prevValue?: T) => T {
  return typeof value === "function";
}

export const useControllableState = <T>({ value, defaultValue, onChange }: UseControllableStateParams<T>) => {
  const [unControlledValue, setUnControlledValue] = useState(defaultValue as T);

  const isControlled = value !== undefined;
  const state = isControlled ? value : unControlledValue;

  const setState: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      const nextValue = isStateActionFunction(value) ? value(state) : value;

      if (!isControlled) {
        setUnControlledValue(value);
      }

      onChange?.(nextValue);
    },
    [isControlled, state, onChange],
  );

  return [state, setState] as const;
};
