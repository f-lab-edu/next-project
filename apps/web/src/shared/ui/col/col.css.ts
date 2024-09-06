import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { screenBreakPoints } from "@/shared/styles";

import { gutterVar, lgColumnsVar, mdColumnsVar, smColumnsVar } from "../container/container.css";

export const lgWidthVar = createVar();
export const mdWidthVar = createVar();
export const smWidthVar = createVar();

export const col = style({
  padding: `0 ${calc.divide(gutterVar, 2)}`,
  width: calc(lgWidthVar).divide(lgColumnsVar).multiply("100%").toString(),

  "@media": {
    [`screen and (max-width: ${screenBreakPoints.md})`]: {
      width: calc(mdWidthVar).divide(mdColumnsVar).multiply("100%").toString(),
    },
    [`screen and (max-width: ${screenBreakPoints.sm})`]: {
      width: calc(smWidthVar).divide(smColumnsVar).multiply("100%").toString(),
    },
  },
});
