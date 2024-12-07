import { style } from "@vanilla-extract/css";

import { globalThemeVars, screenBreakPointsWithNumber } from "@/shared/styles";

export const filterContentContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: globalThemeVars.space["3.5"],
  rowGap: globalThemeVars.space["4"],

  "@media": {
    [`screen and (min-width: ${screenBreakPointsWithNumber.sm}px)  and  (max-width: ${screenBreakPointsWithNumber.md}px)`]:
      {
        gridTemplateColumns: "repeat(3, minmax(33.3%, auto))",
      },
    "screen and (max-width: 720px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});
