import { Combine, PolyMorphismPropsWithoutRef } from "@repo/ui/types";

import { TypographySprinkles } from "@/shared/styles/sprinkles";

export interface TextProps
  extends Combine<
    Combine<
      Omit<PolyMorphismPropsWithoutRef<"element">, "color">,
      { as?: "span" | "div" | "label" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
    >,
    TypographySprinkles
  > {}

export type TextForwardedRef = HTMLDivElement | HTMLSpanElement | HTMLLabelElement | HTMLParagraphElement;
