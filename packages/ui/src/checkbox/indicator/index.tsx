import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { Slot } from "../../slot";
import { useCheckboxContext } from "../root";

import { CheckboxIndicatorProps } from "./checkbox-indicator.types";

export const CheckboxIndicator = forwardRef(
  (props: CheckboxIndicatorProps, forwardedRef: ForwardedRef<HTMLSpanElement>) => {
    const { asChild, children, className, ...restCheckboxIndicatorProps } = props;

    const context = useCheckboxContext();

    const dataState = context!.checked ? "checked" : "unchecked";

    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        ref={forwardedRef}
        className={clsx("base-checkbox-indicator", className)}
        data-state={dataState}
        data-disabled={context!.disabled ? "" : undefined}
        style={{ pointerEvents: "none" }}
        {...restCheckboxIndicatorProps}
      >
        {children}
      </Comp>
    );
  },
);

CheckboxIndicator.displayName = "CheckboxIndicator";
