import { useMovieGenresQuery } from "@/entities/genres";
import { Chip } from "@/shared/ui/chip";

import { useFilterContext } from "../filter-context";

import { genresFilterContainer } from "./genres-filter.css";

export function GenresFilter() {
  const { data: genres, status } = useMovieGenresQuery();
  const context = useFilterContext();

  if (status === "pending") {
    return <div>로딩중...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  const handleToggleChip = (genreId: number) => () => {
    context?.dispatch({ type: "TOGGLE_GENRES", payload: genreId });
  };

  return (
    <div className={genresFilterContainer}>
      {Array.from(genres.GenresList).map(([genreId, { name }]) => (
        <Chip
          checked={context?.checkedGenres.has(genreId)}
          key={genreId}
          onToggleChanged={handleToggleChip(genreId)}
          radius="full"
        >
          <span>{name}</span>
        </Chip>
      ))}
    </div>
  );
}
