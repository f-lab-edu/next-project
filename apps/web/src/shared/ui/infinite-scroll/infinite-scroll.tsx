import { useEffect, useRef } from "react";

import { useIntersectionObserver } from "@/shared/lib";

import { InfiniteScrollProps } from "./infinite-scroll.types";

export function InfiniteScroll(props: InfiniteScrollProps) {
  const { isFetchNextPage, hasNextPage, fetchNextPage, children } = props;

  const infiniteScrollTrigger = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(infiniteScrollTrigger, {
    root: null,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchNextPage) {
      fetchNextPage?.();
    }
  }, [isFetchNextPage, fetchNextPage, hasNextPage, entry?.isIntersecting]);

  return (
    <>
      {children}
      <div ref={infiniteScrollTrigger} />
    </>
  );
}
