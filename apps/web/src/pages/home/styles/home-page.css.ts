import { style } from "@vanilla-extract/css";

import { globalThemeVars } from "@/shared/styles/theme";

export const popularMovieListTitle = style({
  margin: "14px 0",
  fontWeight: globalThemeVars.typography.fontWeights.bold,
  fontSize: globalThemeVars.typography.fontSizes.xl,
});
