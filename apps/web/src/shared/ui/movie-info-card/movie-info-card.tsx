import clsx from "clsx";
import { ForwardedRef, RefObject, forwardRef } from "react";

import { OutletCompProps, makePlugOf, withOutlet } from "@/shared/hoc";

import {
  movieInfoCardContainer,
  movieInfoCardDescription,
  movieInfoCardMetaInfo,
  movieInfoCardPoster,
  movieInfoCardTitle,
} from "./movie-info-card.css";

const outletNames = ["poster", "title", "description", "metaInfo"] as const;

const MovieCardOutletRoot = forwardRef(
  (props: OutletCompProps<typeof outletNames>, forwardedRef: ForwardedRef<HTMLElement>) => {
    const { outlets, className } = props;

    const movieCardContainerRef = forwardedRef as RefObject<HTMLDivElement>;

    return (
      <article className={clsx(className, movieInfoCardContainer)} ref={movieCardContainerRef}>
        {outlets.poster}
        {outlets.title}
        {outlets.description}
        {outlets.metaInfo}
      </article>
    );
  },
);

MovieCardOutletRoot.displayName = "MovieCard.Outlet";

const MovieInfoCardOutlet = withOutlet(outletNames, MovieCardOutletRoot);

export const MovieInfoCard = Object.assign(MovieInfoCardOutlet, {
  Poster: makePlugOf("poster", movieInfoCardPoster),
  Title: makePlugOf("title", movieInfoCardTitle),
  Description: makePlugOf("description", movieInfoCardDescription),
  MetaInfo: makePlugOf("metaInfo", movieInfoCardMetaInfo),
});
