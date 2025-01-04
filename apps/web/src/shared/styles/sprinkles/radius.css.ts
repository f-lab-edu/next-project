import { createVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { defineProperties } from "@vanilla-extract/sprinkles";

import { ValuePerRadius } from "@/shared/types";

export const radiusFactor = createVar();

export const radiusFactorPerRadius: ValuePerRadius = {
  none: 0,
  small: 0.75,
  medium: 1,
  large: 1.5,
  full: 9999,
};

const makeRadius = (baseValue: string) => {
  return calc(baseValue).multiply(radiusFactor).toString();
};

export const radiusStyles = defineProperties({
  properties: {
    borderRadius: {
      "1": makeRadius("3px"),
      "2": makeRadius("4px"),
      "3": makeRadius("6px"),
      "4": makeRadius("8px"),
    },
  },
});
