import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { filterContentContainer } from "@/features/filter/ui/filtered-content/filtered-content.css";
import { FilteredContentProps } from "@/features/filter/ui/filtered-content/filtered-content.types";

export const FilteredContent = forwardRef((props: FilteredContentProps, forwardedRef: ForwardedRef<HTMLElement>) => {
  const { movieList, itemComp: ItemComp, className } = props;

  return (
    <section className={clsx(className, filterContentContainer)} ref={forwardedRef}>
      {movieList.GeneralAudienceMovies.map((movie) => (
        <ItemComp key={movie.id} movieInfo={movie} />
      ))}
    </section>
  );
});

FilteredContent.displayName = "FilteredContent";
