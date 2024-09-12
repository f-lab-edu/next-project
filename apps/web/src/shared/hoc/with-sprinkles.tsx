import { Slot } from "@repo/ui/slot";
import { Combine, PolyMorphismPropsWithoutRef } from "@repo/ui/types";
import clsx from "clsx";
import { ForwardedRef, forwardRef, useRef } from "react";

import { ReactHTML } from "../lib";
import { SprinklesFnBase } from "../styles/sprinkles";

export interface SprinklesCompProps
  extends Combine<Omit<PolyMorphismPropsWithoutRef<"element">, "color">, { as?: ReactHTML }> {}

export const withSprinkles = <T extends SprinklesFnBase>(sprinkles: T, defaultTag: ReactHTML) => {
  const SprinklesComp = forwardRef(
    (props: Combine<SprinklesCompProps, Parameters<T>[0]>, forwardedRef: ForwardedRef<HTMLElement>) => {
      const sprinkleProps = useRef<Record<string, unknown>>({});
      const nativeProps = useRef<Record<string, unknown>>({});

      const { children, asChild, className, ...sprinklesCompProps } = props;

      const Tag = props.as ?? defaultTag;

      Object.entries(sprinklesCompProps).forEach(([key, value]) => {
        if (sprinkles.properties.has(key)) {
          sprinkleProps.current[key] = value;
        } else {
          nativeProps.current[key] = value;
        }
      });

      return (
        <Slot ref={forwardedRef} {...nativeProps.current} className={clsx(sprinkles(sprinkleProps.current), className)}>
          {asChild ? children : <Tag>{children}</Tag>}
        </Slot>
      );
    },
  );

  SprinklesComp.displayName = "SprinklesComponent";

  return SprinklesComp;
};
