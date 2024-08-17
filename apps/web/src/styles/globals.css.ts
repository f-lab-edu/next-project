import { globalStyle } from "@vanilla-extract/css";

import { fonts } from "./theme/tokens/typography.css";

globalStyle("html", {
  fontFamily: fonts.main,
});
