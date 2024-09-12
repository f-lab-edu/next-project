import { createSprinkles } from "@vanilla-extract/sprinkles";

import { typographyStyles } from "./typography.css";

export interface SprinklesFnBase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any): string;
  properties: Set<string>;
}

export const typographySprinkles = createSprinkles(typographyStyles);

export type TypographySprinkles = Parameters<typeof typographySprinkles>[0];
