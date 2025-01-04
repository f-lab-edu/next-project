import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { globalThemeVars, themeColorContract } from "@/shared/styles";

const cardHeight = createVar();
const cardPadding = createVar();

export const reviewCardContainer = style({
  vars: {
    [cardHeight]: "182px",
    [cardPadding]: globalThemeVars.space["3"],
  },
  backgroundColor: themeColorContract.color.background,
  border: `1px solid ${themeColorContract.color.gray20}`,
  borderRadius: globalThemeVars.radius.lg,
  height: cardHeight,
  padding: cardPadding,
});

export const reviewCardTitle = style({
  display: "flex",
  justifyContent: "space-between",
});

export const reviewCardContent = style({
  display: "flex",
  gap: globalThemeVars.space["2"],
  padding: `${globalThemeVars.space["3"]} 0`,
  height: "100%",
});

export const reviewCardPosterWrapper = style({
  flex: "1 0 0",
  overflow: "hidden",
  borderRadius: globalThemeVars.radius.sm,
  height: "fit-content",
});

export const reviewCardContentWrapper = style({
  flex: "4 0 0",
});

export const reviewMovieTitle = style({
  marginBottom: globalThemeVars.space["1"],
});

export const reviewContent = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 4,
  lineHeight: "1.5em",
  maxHeight: calc(cardHeight).divide(2).add(cardPadding).toString(),
});
