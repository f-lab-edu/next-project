import { style } from "@vanilla-extract/css";

export const linkButton = style({
  textDecoration: "none",

  selectors: {
    "&:visited": {
      color: "inherit",
    },
  },
});
