import { createVar, style } from "@vanilla-extract/css";

import { themeColorContract } from "@/shared/styles";

export const chipHeight = createVar();

export const baseChip = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  selectors: {
    "&[data-state=unchecked]": {
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 1px ${themeColorContract.color.gray90}`,
      color: themeColorContract.color.gray80,
    },
    "&[data-state=checked]": {
      backgroundColor: themeColorContract.color.gray10,
      color: themeColorContract.color.gray90,
    },
  },
});
