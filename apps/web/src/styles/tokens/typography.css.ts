import { fontFace } from "@vanilla-extract/css";

export const pretendard = fontFace([
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')",
    fontWeight: 400,
    fontStyle: "normal",
  },
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff')",
    fontWeight: 500,
    fontStyle: "normal",
  },
  {
    src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff')",
    fontWeight: 700,
    fontStyle: "normal",
  },
]);

export const fonts = {
  main: `${pretendard}, '-apple-system', BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, 'sans-serif'`,
};

export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

export const fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700",
};

export const lineHeights = {
  normal: "normal",
  none: "1",
  shorter: "1.25",
  short: "1.375",
  base: "1.5",
  tall: "1.625",
  taller: "2",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
};

export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};
