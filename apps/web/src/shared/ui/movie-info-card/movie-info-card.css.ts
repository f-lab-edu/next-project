import { style } from "@vanilla-extract/css";

import { globalThemeVars, themeColorContract } from "@/shared/styles";

export const movieInfoCardContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const movieInfoCardPoster = style({
  borderRadius: "5px",
});

export const movieInfoCardTitle = style({
  fontSize: globalThemeVars.typography.fontSizes.md,
  lineHeight: globalThemeVars.typography.lineHeights.short,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
  margin: "5px 0 3px 0",
});

export const movieInfoCardDescription = style({
  fontSize: globalThemeVars.typography.fontSizes.sm,
  lineHeight: globalThemeVars.typography.lineHeights.shorter,
  marginBottom: "3px",
});

export const movieInfoCardMetaInfo = style({
  fontSize: globalThemeVars.typography.fontSizes.xs,
  lineHeight: globalThemeVars.typography.lineHeights.shorter,
  color: themeColorContract.color.tertiaryText,
});
