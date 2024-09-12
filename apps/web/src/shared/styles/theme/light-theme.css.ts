import { createTheme } from "@vanilla-extract/css";

import { themeColorContract, lightThemeColors, commonThemeColors } from "../tokens/colors.css";

export const lightThemeClass = createTheme(
  { ...themeColorContract },
  {
    color: {
      primaryText: lightThemeColors.gray100,
      secondaryText: lightThemeColors.gray90,
      tertiaryText: lightThemeColors.gray80,
      disabledText: lightThemeColors.gray70,
      background: commonThemeColors.white,
      backgroundElevated: commonThemeColors.white,
      backgroundElevatedAlt: lightThemeColors.background30,
      divider: lightThemeColors.gray10,
      dividerAlt: lightThemeColors.gray20,
      ...lightThemeColors,
    },
  },
);
