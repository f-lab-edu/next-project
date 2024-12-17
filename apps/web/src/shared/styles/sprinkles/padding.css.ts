import { defineProperties } from "@vanilla-extract/sprinkles";

import { ValuePerSize } from "@/shared/types";

import { spacing } from "../tokens";

import { mediaQueryCondition } from "./media-query-condition";

const paddingPerSize: ValuePerSize = {
  "1": spacing[2],
  "2": spacing[3],
  "3": spacing[4],
  "4": spacing[6],
};

export const paddingStyles = defineProperties({
  ...mediaQueryCondition,
  properties: {
    paddingTop: paddingPerSize,
    paddingBottom: paddingPerSize,
    paddingLeft: paddingPerSize,
    paddingRight: paddingPerSize,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});
