import { ForwardedRef, forwardRef } from "react";

import { FilterProps, genresFilterWrapper, genresFilterContainer } from "@/features/filter";
import { Text } from "@/shared/ui/text";

import { GenresFilter } from "../genres-filter";

export const Filter = forwardRef((props: FilterProps, forwardedRef: ForwardedRef<HTMLElement>) => {
  return (
    <section className={genresFilterContainer} ref={forwardedRef}>
      <article className={genresFilterWrapper}>
        <Text as="h3">장르</Text>
        <GenresFilter />
      </article>
    </section>
  );
});

Filter.displayName = "Filter";
