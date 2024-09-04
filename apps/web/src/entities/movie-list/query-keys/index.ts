export const movieListQueryKeys = {
  popularMovieList: (page: number, language: string, region: number) =>
    ["popular-movie-list", { page, language, region }] as const,
};
