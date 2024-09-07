import { style } from "@vanilla-extract/css";

import { themeColorContract } from "@/shared/styles";

export const descriptionWrapper = style({
  display: "flex",
  gap: "5px",
});

export const releasedDate = style({
  color: themeColorContract.color.primary10,
});
