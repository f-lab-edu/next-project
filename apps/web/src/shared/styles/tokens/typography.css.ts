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
  /**
   * @description `0.75rem` // `16 * 0.75 = 12px`
   */
  xs: "0.75rem",
  /**
   * @description `0.875rem` // `16 * 0.875 = 14px`
   */
  sm: "0.875rem",
  /**
   * @description `1rem` // `16 * 1 = 16px`
   */
  md: "1rem",
  /**
   * @description `1.125rem` // `16 * 1.125 = 18px`
   */
  lg: "1.125rem",
  /**
   * @description `1.25rem` // `16 * 1.25 = 20px`
   */
  xl: "1.25rem",
  /**
   * @description `1.5rem` // `16 * 1.5 = 24px`
   */
  "2xl": "1.5rem",
  /**
   * @description `1.875rem` // `16 * 1.875 = 30px`
   */
  "3xl": "1.875rem",
  /**
   * @description `2.25rem` // `16 * 2.25 = 36px`
   */
  "4xl": "2.25rem",
  /**
   * @description `3rem` // `16 * 3 = 48px`
   */
  "5xl": "3rem",
  /**
   * @description `3.75rem` // `16 * 3.375 = 54px`
   */
  "6xl": "3.75rem",
  /**
   * @description `4.5rem` // `16 * 4.5 = 72px`
   */
  "7xl": "4.5rem",
  /**
   * @description `6rem` // `16 * 6 = 96px`
   */
  "8xl": "6rem",
  /**
   * @description `8rem` // `16 * 8 = 128px`
   */
  "9xl": "8rem",
};

export const fontWeights = {
  /**
   * @description `400`
   */
  regular: "400",
  /**
   * @description `500`
   */
  medium: "500",
  /**
   * @description `700`
   */
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
  /**
   * @description `0.75rem` // `16 * 0.75 = 12px`
   */
  "3": "0.75rem",
  /**
   * @description `1rem` // `16 * 1 = 16px`
   */
  "4": "1rem",
  /**
   * @description `1.25rem` // `16 * 1.25 = 20px`
   */
  "5": "1.25rem",
  /**
   * @description `1.5rem` // `16 * 1.5 = 24px`
   */
  "6": "1.5rem",
  /**
   * @description `1.75rem` // `16 * 1.75 = 28px`
   */
  "7": "1.75rem",
  /**
   * @description `2rem` // `16 * 2 = 32px`
   */
  "8": "2rem",
  /**
   * @description `2.25rem` // `16 * 2.25 = 36px`
   */
  "9": "2.25rem",
  /**
   *  @description `2.25rem` // `16 * 2.5 = 40px`
   */
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
