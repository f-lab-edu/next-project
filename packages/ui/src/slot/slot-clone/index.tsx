/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  ComponentPropsWithRef,
  ForwardedRef,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";

import { mergeProps, mergeRefs } from "../../utils/";
import { SlottableProps } from "../slot.types";

/** Slot 컴포넌트 자식의 최대 갯수 */
const MAX_NUM_OF_SLOTTED_CHILDREN = 1;

export const SlotClone = forwardRef((props: SlottableProps, forwardedRef: ForwardedRef<HTMLElement>) => {
  const { children, ...slotProps } = props;

  if (Children.count(children) > MAX_NUM_OF_SLOTTED_CHILDREN) {
    throw new Error("Slot 컴포넌트의 children props 에는 단일 ReactElement 만 전달할 수 있습니다.");
  }

  const mergedProps = mergeProps(slotProps, (children as any).props);
  const mergedRef = mergeRefs(forwardedRef, (children as any)?.ref);

  if (isValidElement(children)) {
    return cloneElement<ComponentPropsWithRef<"element">>(children as ReactElement, {
      ...mergedProps,
      ref: mergedRef,
    });
  }

  return null;
});
