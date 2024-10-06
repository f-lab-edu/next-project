import { AspectRatio } from "@repo/ui/aspect-ratio";
import Image from "next/image";

import { MovieInfoCard } from "@/shared/ui/movie-info-card";
import { Text } from "@/shared/ui/text";

import { MovieListItem } from "../../model";

export function NowPlayingMovieCard({ movieInfo }: { movieInfo: MovieListItem }) {
  const { posterPath, title, Genres } = movieInfo;

  return (
    <MovieInfoCard>
      <MovieInfoCard.Poster>
        <AspectRatio ratio={4 / 3}>
          <Image
            alt={`${title} poster image`}
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
        <Text size="xs">{Genres}</Text>
      </MovieInfoCard.Description>
    </MovieInfoCard>
  );
}
