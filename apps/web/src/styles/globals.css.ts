import { globalStyle } from "@vanilla-extract/css";

import { fonts } from "./tokens/typography.css";

globalStyle("html", {
  fontFamily: fonts.main,
});
