import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { Slot, Slottable } from "../../slot";
import { createContext, useControllableState } from "../../utils";

import { CheckboxContext, CheckboxRootProps } from "./checkbox-root.types";

const [CheckboxProvider, useContext] = createContext<CheckboxContext>();

export const useCheckboxContext = useContext;

export const CheckboxRoot = forwardRef((props: CheckboxRootProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const {
    asChild,
    children,
    className,
    defaultChecked = false,
    checked: propsChecked,
    disabled = false,
    required = false,
    onCheckedChange,
    name,
    id,
    ...restCheckboxRoot
  } = props;

  const Comp = asChild ? Slot : "div";

  const [checked, setChecked] = useControllableState({
    defaultValue: defaultChecked,
    value: propsChecked,
    onChange: onCheckedChange,
  });

  const dataState = checked ? "checked" : "unchecked";

  const handleCheckboxClick = () => {
    setChecked((prevValue) => !prevValue);
  };

  return (
    <CheckboxProvider value={{ checked, disabled }}>
      <Comp
        className={clsx("base-checkbox-root", className)}
        ref={forwardedRef}
        data-state={dataState}
        data-disabled={disabled ? "" : undefined}
        style={{ position: "relative" }}
        {...restCheckboxRoot}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          aria-hidden="true"
          defaultChecked={checked}
          disabled={disabled}
          required={required}
          data-state={dataState}
          style={{ opacity: 0, position: "absolute", inset: 0 }}
          onChange={handleCheckboxClick}
        />
        <Slottable>{children}</Slottable>
      </Comp>
    </CheckboxProvider>
  );
});

CheckboxRoot.displayName = "CheckboxRoot";

export const Checkbox = CheckboxRoot;
