import { defineProperties } from "@vanilla-extract/sprinkles";

import { ValuePerSize } from "@/shared/types";

import { fontSizes, letterSpacing, lineHeights } from "../tokens";

import { mediaQueryCondition } from "./media-query-condition";

const fontSizePerSize: ValuePerSize = {
  "1": fontSizes.xs,
  "2": fontSizes.sm,
  "3": fontSizes.md,
  "4": fontSizes.lg,
};

const lineHeightPerSize: ValuePerSize = {
  "1": lineHeights[4],
  "2": lineHeights[5],
  "3": lineHeights[6],
  "4": lineHeights[7],
};

const letterSpacingPerSize: ValuePerSize = {
  "1": letterSpacing.wide,
  "2": letterSpacing.normal,
  "3": letterSpacing.normal,
  "4": letterSpacing.tight,
};

export const fontStyles = defineProperties({
  ...mediaQueryCondition,
  properties: {
    fontSize: fontSizePerSize,
    lineHeight: lineHeightPerSize,
    letterSpacing: letterSpacingPerSize,
  },
});
