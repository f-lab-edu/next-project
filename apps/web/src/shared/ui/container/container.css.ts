import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { screenBreakPoints } from "@/styles/tokens/screen.css";

export const gutterVar = createVar();

export const lgColumnsVar = createVar();
const lgMarginVar = createVar();

export const mdColumnsVar = createVar();
const mdMarginVar = createVar();

export const smColumnsVar = createVar();
const smMarginVar = createVar();

export const container = style({
  vars: {
    [gutterVar]: "20px",
    [lgColumnsVar]: "12",
    [lgMarginVar]: "50px",
    [mdColumnsVar]: "12",
    [mdMarginVar]: "25px",
    [smColumnsVar]: "4",
    [smMarginVar]: "5px",
  },
  width: "100%",
  maxWidth: calc(lgMarginVar).multiply(2).add("1344px").toString(),
  padding: `0 ${lgMarginVar}`,
  margin: "0 auto",

  "@media": {
    [`screen and (max-width: ${screenBreakPoints.md})`]: {
      maxWidth: "none",
      padding: `0 ${mdMarginVar}`,
    },
    [`screen and (max-width: ${screenBreakPoints.sm})`]: {
      maxWidth: "none",
      padding: `0 ${smMarginVar}`,
    },
  },
});
