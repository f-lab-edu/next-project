import "@/styles/normalize.css";
import "@/styles/globals.css";

import { lightThemeClass } from "@/styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lightThemeClass} id="__app">
      <Component {...pageProps} />
    </div>
  );
}
