import { createGlobalTheme } from "@vanilla-extract/css";

import { commonThemeColors } from "./tokens/colors.css";

export const globalThemeVars = createGlobalTheme(":root", {
  color: commonThemeColors,
});
