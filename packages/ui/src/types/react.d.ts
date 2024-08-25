import { ComponentPropsWithoutRef, DetailedHTMLProps, HTMLAttributes } from "react";

import { Combine } from "./utils";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      element: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export type PolyMorphismPropsWithoutRef<Comp extends ElementType, Props = unknown> = Combine<
  ComponentPropsWithoutRef<Comp>,
  Combine<Props, { asChild?: boolean }>
>;
