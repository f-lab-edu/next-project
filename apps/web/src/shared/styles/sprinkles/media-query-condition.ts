import { screenBreakPoints, screenBreakPointsWithNumber } from "../tokens/screen.css";

export const mediaQueryCondition = {
  conditions: {
    mobile: { "@media": `screen and (max-width: ${screenBreakPoints.sm})` },
    tablet: {
      "@media": `screen and (min-width: ${screenBreakPointsWithNumber.sm + 1}px) and  (max-width: ${screenBreakPoints.md})`,
    },
    desktop: {},
  },
  defaultCondition: "desktop",
  responsiveArray: ["desktop", "tablet", "mobile"],
} as const;
