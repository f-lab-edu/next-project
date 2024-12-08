import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { Slot } from "../../slot";
import { useControllableState } from "../../utils";

import { ToggleRootProps } from "./toggle-root.types";

export const ToggleRoot = forwardRef((props: ToggleRootProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  const {
    asChild,
    id,
    className,
    name,
    defaultChecked,
    checked: checkedProps,
    disabled,
    required,
    onToggleChanged,
    ...restToggleRootProps
  } = props;

  const [checked, setChecked] = useControllableState({
    defaultValue: defaultChecked,
    value: checkedProps,
    onChange: onToggleChanged,
  });

  const dataState = checked ? "checked" : "unchecked";

  const Comp = asChild ? Slot : "button";

  const handleToggleClick = () => {
    setChecked((prevValue) => !prevValue);
  };

  return (
    <Comp
      role="checkbox"
      aria-checked={checked}
      className={clsx("base-toggle-root", className)}
      ref={forwardedRef}
      data-state={dataState}
      data-disabled={disabled ? "" : undefined}
      onClick={handleToggleClick}
      style={{ position: "relative" }}
      {...restToggleRootProps}
    >
      <input
        aria-hidden="true"
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        required={required}
        data-disabled={disabled ? "" : undefined}
        style={{ opacity: 0, position: "relative", inset: 0 }}
      />
    </Comp>
  );
});

ToggleRoot.displayName = "ToggleRoot";

export const Toggle = ToggleRoot;
