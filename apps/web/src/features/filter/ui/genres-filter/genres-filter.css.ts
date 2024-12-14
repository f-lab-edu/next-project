import { style } from "@vanilla-extract/css";

import { globalThemeVars } from "@/shared/styles";

export const genresFilterContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: globalThemeVars.space["1.5"],
});
