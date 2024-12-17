import { defineProperties } from "@vanilla-extract/sprinkles";

import { ValuePerSize } from "@/shared/types";

import { spacing } from "../tokens";

import { mediaQueryCondition } from "./media-query-condition";

const heightPerSize: ValuePerSize = {
  "1": spacing[6],
  "2": spacing[8],
  "3": spacing[10],
  "4": spacing[12],
};

export const heightStyles = defineProperties({
  ...mediaQueryCondition,
  properties: {
    height: heightPerSize,
  },
});
