import { createTheme } from "@vanilla-extract/css";

import { commonThemeColors, darkThemeColors, themeColorContract } from "../tokens/colors.css";

export const darkThemeClass = createTheme(
  { ...themeColorContract },
  {
    color: {
      primaryText: commonThemeColors.white,
      secondaryText: darkThemeColors.gray90,
      tertiaryText: darkThemeColors.gray60,
      disabledText: darkThemeColors.gray40,
      background: commonThemeColors.black,
      backgroundElevated: darkThemeColors.background30,
      backgroundElevatedAlt: darkThemeColors.background60,
      divider: darkThemeColors.gray10,
      dividerAlt: darkThemeColors.gray20,
      ...darkThemeColors,
    },
  },
);
