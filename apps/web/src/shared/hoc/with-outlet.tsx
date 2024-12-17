/* eslint-disable react/display-name */
import { Slot } from "@repo/ui/slot";
import clsx from "clsx";
import {
  Children,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactElement,
  ReactNode,
  createElement,
  forwardRef,
  isValidElement,
} from "react";

import { upperFirst } from "@/shared/lib";
import { ArrayValues } from "@/shared/lib/types";

const getPluginCompDisplayName = (slotName: string) => `Plugin.${upperFirst(slotName)}`;

export const makePlugOf = (slotName: string, className?: string) => {
  const PluginComp = forwardRef(
    (props: ComponentPropsWithoutRef<"element">, forwardedRef: ForwardedRef<HTMLElement>) => {
      const { children, className: propsClassName, ...rest } = props;

      return (
        <Slot {...rest} className={clsx(className, propsClassName)} ref={forwardedRef}>
          {children}
        </Slot>
      );
    },
  );

  PluginComp.displayName = getPluginCompDisplayName(slotName);
  return PluginComp;
};

type OutletComponents<T extends readonly string[]> = {
  [key in ArrayValues<T>]: ReactElement;
} & { default: ReactElement };

export interface OutletCompProps<T extends readonly string[]> extends ComponentPropsWithRef<"element"> {
  outlets: OutletComponents<T>;
}

export const withOutlet = <T extends readonly string[]>(
  outletArray: T,
  Comp: (props: OutletCompProps<T>) => ReactNode,
) => {
  const OutletComp = forwardRef(
    (props: ComponentPropsWithoutRef<"element">, forwardedRef: ForwardedRef<HTMLElement>) => {
      const childrenArray: ReactNode[] = Children.toArray(props.children);

      const outlets = [...outletArray, "default"].reduce((prev, currentKey) => {
        if (currentKey === "default") {
          const defaultChildren = childrenArray.filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (child) => isValidElement(child) && !(child as any).type?.displayName,
          );
          return { ...prev, default: defaultChildren };
        } else {
          const pluginChildren = childrenArray.filter(
            (child) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              isValidElement(child) && (child as any).type?.displayName === getPluginCompDisplayName(currentKey),
          );
          return { ...prev, [currentKey]: pluginChildren };
        }
      }, {}) as OutletComponents<T>;

      return <>{createElement(Comp, { outlets, ref: forwardedRef, ...props })}</>;
    },
  );
  OutletComp.displayName = "Outlet";
  return OutletComp;
};
