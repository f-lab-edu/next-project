import { AspectRatio } from "@repo/ui/aspect-ratio";
import Image from "next/image";

import { MovieInfoCard } from "@/shared/ui/movie-info-card";
import { Text } from "@/shared/ui/text";

import { MovieListItem } from "../../model";

import { popularMovieCardDescriptionWrapper } from "./popular-movie-card.css";

export function PopularMovieCard({ movieInfo }: { movieInfo: MovieListItem }) {
  const { posterPath, title, ReleasedYear, Rating, Region } = movieInfo;
  return (
    <MovieInfoCard>
      <MovieInfoCard.Poster>
        <AspectRatio ratio={4 / 3}>
          <Image
            alt=""
            height={300}
            src={`${process.env.NEXT_PUBLIC_TMDB_RESOURCE_BASE_URL}/t/p/w400${posterPath}`}
            style={{ width: "100%", height: "100%" }}
            width={200}
          />
        </AspectRatio>
      </MovieInfoCard.Poster>

      <MovieInfoCard.Title>
        <Text lineHeight="short" size="md">
          {title}
        </Text>
      </MovieInfoCard.Title>

      <MovieInfoCard.Description>
        <div className={popularMovieCardDescriptionWrapper}>
          <Text lineHeight="shorter" size="sm">
            {ReleasedYear}
          </Text>
          <Text lineHeight="shorter" size="sm">
            &middot;
          </Text>
          <Text lineHeight="shorter" size="sm">
            {Region}
          </Text>
        </div>
      </MovieInfoCard.Description>

      <MovieInfoCard.MetaInfo>
        <Text color="tertiaryText" lineHeight="shorter" size="xs">
          평점: {Rating}
        </Text>
      </MovieInfoCard.MetaInfo>
    </MovieInfoCard>
  );
}
