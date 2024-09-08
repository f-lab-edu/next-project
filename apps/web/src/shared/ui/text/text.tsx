import { ForwardedRef, forwardRef } from "react";

import { withSprinkles } from "@/shared/hoc";
import { typographySprinkles } from "@/shared/styles/sprinkles";

import { TextForwardedRef, TextProps } from "./text.types";

const TextRoot = withSprinkles(typographySprinkles, "span");

export const Text = forwardRef((props: TextProps, forwardedRef: ForwardedRef<TextForwardedRef>) => {
  return <TextRoot {...props} ref={forwardedRef} />;
});

Text.displayName = "Text";
