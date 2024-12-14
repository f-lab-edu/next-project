import { Toggle } from "@repo/ui/toggle";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import {
  createRadiusFactor,
  fontSprinkles,
  heightSprinkles,
  paddingSprinkles,
  radiusSprinkles,
} from "@/shared/styles/sprinkles";

import { baseChip } from "./chip.css";
import { ChipProps } from "./chip.types";

export const Chip = forwardRef((props: ChipProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  const { children, size = "2", radius = "none", style, ...restChipProps } = props;

  const paddingStyles = paddingSprinkles({
    paddingX: size,
  });

  const fontStyles = fontSprinkles({
    fontSize: size,
    lineHeight: size,
    letterSpacing: size,
  });

  const heightStyles = heightSprinkles({
    height: size,
  });

  const radiusStyles = radiusSprinkles({
    borderRadius: size,
  });

  return (
    <Toggle
      ref={forwardedRef}
      {...restChipProps}
      className={clsx("base-chip", baseChip, paddingStyles, fontStyles, heightStyles, radiusStyles)}
      style={{ ...style, ...assignInlineVars(createRadiusFactor(radius)) }}
    >
      {children}
    </Toggle>
  );
});

Chip.displayName = "Chip";
