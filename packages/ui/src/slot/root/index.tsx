import {
  Children,
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactElement,
  forwardRef,
  isValidElement,
  cloneElement,
} from "react";

import { SlotClone } from "../slot-clone";
import { SlottableProps } from "../slot.types";
import { isSlottable } from "../slottable";

/** Slottable 컴포넌트의 최대 갯수 */
const MAX_NUM_OF_SLOTTABLE = 1;
/** Slottable 컴포넌트 자식의 최대 갯수 */
const MAX_NUM_OF_SLOTTABLE_CHILDREN = 1;

export const Slot = forwardRef((props: ComponentPropsWithoutRef<"s">, forwardedRef: ForwardedRef<HTMLElement>) => {
  const { children, ...slotProps } = props;
  const childrenArray = Children.toArray(children);

  const slottableComps: ReactElement<SlottableProps>[] = childrenArray.filter(isSlottable);

  if (slottableComps.length > MAX_NUM_OF_SLOTTABLE) {
    throw new Error("Slottable 컴포넌트는 하나만 존재해야 합니다.");
  }

  if (slottableComps?.[0]) {
    const slottableComp = slottableComps[0];
    const newContainer = slottableComp.props.children;

    if (Children.count(newContainer) > MAX_NUM_OF_SLOTTABLE_CHILDREN) {
      throw new Error("Slottable 컴포넌트의 children props 에는 단일 ReactElement 만 전달할 수 있습니다.");
    }

    if (!isValidElement(newContainer)) return null;

    const newChildren = childrenArray.map((child) => {
      if (child === slottableComp) {
        return newContainer.props.children;
      } else {
        return child;
      }
    });

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {cloneElement(newContainer, undefined, ...newChildren)}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={forwardedRef}>
      {children}
    </SlotClone>
  );
});

Slot.displayName = "Slot.Root";

export const Root = Slot;
