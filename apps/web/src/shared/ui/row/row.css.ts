import { style } from "@vanilla-extract/css";

import { container } from "../container/container.css";

export const row = style({
  selectors: {
    [`${container} & `]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
});
