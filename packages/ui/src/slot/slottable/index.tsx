import { ReactElement, ReactNode, isValidElement } from "react";

import { SlottableProps } from "../slot.types";

export function isSlottable(children: ReactNode): children is ReactElement {
  return isValidElement(children) && children.type === Slottable;
}

export const Slottable = ({ children }: SlottableProps) => {
  return <>{children}</>;
};
