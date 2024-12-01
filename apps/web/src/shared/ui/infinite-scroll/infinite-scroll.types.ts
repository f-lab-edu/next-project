import { ComponentProps } from "react";

export interface InfiniteScrollProps extends ComponentProps<"element"> {
  hasNextPage?: boolean;
  isFetchNextPage?: boolean;
  fetchNextPage?: () => Promise<unknown>;
}
