import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const ratio = createVar();

export const baseAspectRatioRootWrapper = style({
  position: "relative",
  height: 0,
  overflow: "hidden",
  paddingTop: calc.multiply(ratio, "100%").toString(),
});

export const baseAspectRatioRoot = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
});
