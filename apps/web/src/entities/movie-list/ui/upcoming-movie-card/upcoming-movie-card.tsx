import { AspectRatio } from "@repo/ui/aspect-ratio";
import Image from "next/image";

import { MovieInfoCard } from "@/shared/ui/movie-info-card";

import { MovieListItem } from "../../model";

import { descriptionWrapper, releasedDate } from "./upcoming-movie-card.css";

export function UpcomingMovieCard({ movieInfo }: { movieInfo: MovieListItem }) {
  const { posterPath, title, ReleasedDateDotParsed, Platform } = movieInfo;

  return (
    <MovieInfoCard>
      <MovieInfoCard.Poster>
        <AspectRatio ratio={4 / 3}>
          <Image
            alt={`${title} poster image`}
            height={500}
            src={`${process.env.NEXT_PUBLIC_TMDB_RESOURCE_BASE_URL}/t/p/w500${posterPath}`}
            style={{ width: "100%", height: "100%" }}
            width={500}
          />
        </AspectRatio>
      </MovieInfoCard.Poster>

      <MovieInfoCard.Title>
        <span>{title}</span>
      </MovieInfoCard.Title>

      <MovieInfoCard.Description>
        <div className={descriptionWrapper}>
          <span>{Platform}</span>
          <span className={releasedDate}>{ReleasedDateDotParsed}</span>
        </div>
      </MovieInfoCard.Description>
    </MovieInfoCard>
  );
}
