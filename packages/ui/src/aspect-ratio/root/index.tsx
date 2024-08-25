import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { Slot } from "../../slot";
import { AspectRatioProps } from "../aspect-ratio.types";

import { baseAspectRatioRoot, baseAspectRatioRootWrapper, ratio } from "./root.css";

export const AspectRatio = forwardRef((props: AspectRatioProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const { asChild, ratio: propsRatio = 1, className, ...aspectRatioProps } = props;

  const Comp = asChild ? Slot : "div";

  return (
    <div
      className={baseAspectRatioRootWrapper}
      style={assignInlineVars({
        [ratio]: propsRatio.toString(),
      })}
    >
      <Comp
        ref={forwardedRef}
        className={clsx(baseAspectRatioRoot, "base-aspect-ratio-root", className)}
        {...aspectRatioProps}
      />
    </div>
  );
});

AspectRatio.displayName = "AspectRatio.Root";

export const Root = AspectRatio;
