import { useMovieGenresQuery } from "@/entities/genres";
import { Chip } from "@/shared/ui/chip";

import { genresFilterContainer } from "./genres-filter.css";

export function GenresFilter() {
  const { data: genres, status } = useMovieGenresQuery();

  if (status === "pending") {
    return <div>로딩중...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className={genresFilterContainer}>
      {Array.from(genres.GenresList).map(([genreId, { name }]) => (
        <Chip key={genreId} radius="full">
          <span>{name}</span>
        </Chip>
      ))}
    </div>
  );
}
