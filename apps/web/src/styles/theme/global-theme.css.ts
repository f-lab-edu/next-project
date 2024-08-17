import { createGlobalTheme } from "@vanilla-extract/css";

import { commonThemeColors } from "./tokens/colors.css";
import { spacing } from "./tokens/spacing.css";
import { fontSizes, fontWeights, fonts, letterSpacing, lineHeights } from "./tokens/typography.css";

export const globalThemeVars = createGlobalTheme(":root", {
  color: commonThemeColors,
  typography: {
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacing,
  },
  space: spacing,
});
