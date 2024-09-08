import { defineProperties } from "@vanilla-extract/sprinkles";

import { globalThemeVars, themeColorContract } from "../theme";

import { mediaQueryCondition } from "./\bmedia-query-condition";

export const typographyStyles = defineProperties({
  ...mediaQueryCondition,
  properties: {
    fontSize: globalThemeVars.typography.fontSizes,
    fontWeight: globalThemeVars.typography.fontWeights,
    textAlign: ["left", "center", "right"],
    lineHeight: globalThemeVars.typography.lineHeights,
    color: themeColorContract.color,
  },
  shorthands: {
    size: ["fontSize"],
    weight: ["fontWeight"],
    align: ["textAlign"],
    color: ["color"],
  },
});
