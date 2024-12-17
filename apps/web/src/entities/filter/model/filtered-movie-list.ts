import { InfiniteData } from "@tanstack/react-query";

import { MovieListDTO, MovieListModel } from "@/entities/movie-list";

import { FilteredMovieListDTO } from "../api";

export default class FilteredMovieListModel extends MovieListModel {
  constructor(data: MovieListDTO) {
    super(data);
  }

  static makeFlattenedData(data: InfiniteData<FilteredMovieListDTO, number>) {
    const flattenedFilteredData = data.pages.flat();

    return flattenedFilteredData.reduce(
      (prev, currentData) => {
        prev.page = currentData.page;
        prev.totalPages = currentData.totalPages;
        prev.totalResults = currentData.totalResults;
        prev.results = [...prev.results, ...currentData.results];

        return prev;
      },
      {
        page: 0,
        totalPages: 0,
        totalResults: 0,
        results: [],
      } as FilteredMovieListDTO,
    );
  }
}
