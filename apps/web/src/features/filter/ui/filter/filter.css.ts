import { style } from "@vanilla-extract/css";

export const genresFilterContainer = style({
  position: "sticky",
  top: 0,
});

export const genresFilterWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
