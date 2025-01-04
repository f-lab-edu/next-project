import { createSprinkles } from "@vanilla-extract/sprinkles";

import { Radius } from "@/shared/types";

import { fontStyles } from "./font.css";
import { heightStyles } from "./height.css";
import { paddingStyles } from "./padding.css";
import { radiusFactor, radiusFactorPerRadius, radiusStyles } from "./radius.css";
import { typographyStyles } from "./typography.css";

export interface SprinklesFnBase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any): string;
  properties: Set<string>;
}

export const typographySprinkles = createSprinkles(typographyStyles);

export type TypographySprinkles = Parameters<typeof typographySprinkles>[0];

// padding
export const paddingSprinkles = createSprinkles(paddingStyles);

export type PaddingSprinkles = Parameters<typeof paddingSprinkles>[0];

// font
export const fontSprinkles = createSprinkles(fontStyles);

export type FontSprinkles = Parameters<typeof fontSprinkles>[0];

// height
export const heightSprinkles = createSprinkles(heightStyles);

export type HeightSprinkles = Parameters<typeof heightSprinkles>[0];

// radius
export { radiusFactor, radiusFactorPerRadius } from "./radius.css";

export const radiusSprinkles = createSprinkles(radiusStyles);

export const createRadiusFactor = (radius: Radius) => ({
  [radiusFactor]: radiusFactorPerRadius[radius].toString(),
});

export type RadiusSprinkles = Parameters<typeof radiusSprinkles>[0];
