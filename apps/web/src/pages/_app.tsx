import "@/styles/normalize.css";
import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { lightThemeClass } from "@/styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className={lightThemeClass} id="__app">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
