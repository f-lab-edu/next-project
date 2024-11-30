import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export interface UseInfiniteGridWindowVirtualizerParams {
  rowOptions: Parameters<typeof useWindowVirtualizer>[0];
  colOptions: Parameters<typeof useWindowVirtualizer>[0];
}

export const useInfiniteGridWindowVirtualizer = ({
  rowOptions,
  colOptions,
}: UseInfiniteGridWindowVirtualizerParams) => {
  const scrollContainer = useRef<HTMLElement>(null);

  const rowVirtualizer = useWindowVirtualizer({ ...rowOptions, scrollMargin: scrollContainer.current?.offsetTop ?? 0 });
  const colVirtualizer = useWindowVirtualizer({ ...colOptions });

  return {
    scrollContainer,
    rowVirtualizer,
    colVirtualizer,
  };
};
