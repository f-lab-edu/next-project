import "@/shared/styles/normalize.css";
import "@/shared/styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { queryClient as queryClientInstance } from "@/shared/api";

import type { AppProps } from "next/app";

import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => queryClientInstance);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
