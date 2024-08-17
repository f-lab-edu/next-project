import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1,
});

globalStyle(
  "html, body, div, span, input, button, textarea, select, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  { padding: 0, border: 0, fontSize: "100%", font: "inherit", verticalAlign: "baseline" },
);

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("article, aside, details, figcaption, figure,  footer, header, hgroup, menu, nav, section", {
  display: "block",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle("#__next", {
  isolation: "isolate",
});
