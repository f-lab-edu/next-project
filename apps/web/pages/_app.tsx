import "@/shared/styles/normalize.css";
import "@/shared/styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";

import { queryClient as queryClientInstance } from "@/shared/api";
import { lightThemeClass } from "@/shared/styles";

import type { AppProps } from "next/app";

import "swiper/css";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => queryClientInstance);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className={lightThemeClass}>{getLayout(<Component {...pageProps} />)}</div>
    </QueryClientProvider>
  );
}
