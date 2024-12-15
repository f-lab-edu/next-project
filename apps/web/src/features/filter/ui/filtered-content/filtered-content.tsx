import { ForwardedRef, forwardRef } from "react";

import { FilteredContentProps } from "@/features/filter/ui/filtered-content/filtered-content.types";
import { globalThemeVars } from "@/shared/styles";
import { InfiniteScroll } from "@/shared/ui/infinite-scroll";

export const FilteredContent = forwardRef((props: FilteredContentProps, forwardedRef: ForwardedRef<HTMLElement>) => {
  const {
    movieList,
    itemComp: ItemComp,
    className,
    rowVirtualizer,
    columnVirtualizer,
    fetchNextPage,
    isFetchingNextPage,
    hasNext,
    lanes,
  } = props;

  return (
    <InfiniteScroll fetchNextPage={fetchNextPage} hasNextPage={hasNext} isFetchNextPage={isFetchingNextPage}>
      <section
        className={className}
        ref={forwardedRef}
        style={{
          minHeight: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          return (
            <div
              data-index={virtualRow.index}
              key={virtualRow.key}
              ref={rowVirtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translateY(${virtualRow.start - rowVirtualizer.options.scrollMargin}px)`,
                display: "flex",
                width: "100%",
                gap: `${globalThemeVars.space["4"]}`,
              }}
            >
              {columnVirtualizer.getVirtualItems().map((column) => {
                const currentMovieItem = movieList.GeneralAudienceMovies[virtualRow.index * lanes + column.index];
                return (
                  <div
                    key={column.key}
                    style={{
                      maxWidth: `${100 / lanes}%`,
                      //https://stackoverflow.com/questions/38223879/white-space-nowrap-breaks-flexbox-layout
                      minWidth: 0,
                      flex: "1 0 0",
                    }}
                  >
                    {currentMovieItem ? <ItemComp movieInfo={currentMovieItem} /> : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </InfiniteScroll>
  );
});

FilteredContent.displayName = "FilteredContent";
