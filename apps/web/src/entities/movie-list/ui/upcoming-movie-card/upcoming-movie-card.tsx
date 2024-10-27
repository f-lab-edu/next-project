import { AspectRatio } from "@repo/ui/aspect-ratio";
import Image from "next/image";

import { MovieInfoCard } from "@/shared/ui/movie-info-card";
import { Text } from "@/shared/ui/text";

import { MovieListItemModel } from "../../model";

import { descriptionWrapper } from "./upcoming-movie-card.css";
export function UpcomingMovieCard({ movieInfo }: { movieInfo: MovieListItemModel }) {
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
        <Text lineHeight="short" size="md">
          {title}
        </Text>
      </MovieInfoCard.Title>

      <MovieInfoCard.Description>
        <div className={descriptionWrapper}>
          <Text lineHeight="shorter" size="sm">
            {Platform}
          </Text>
          <Text color="primary10" lineHeight="shorter" size="sm">
            {ReleasedDateDotParsed}
          </Text>
        </div>
      </MovieInfoCard.Description>
    </MovieInfoCard>
  );
}
