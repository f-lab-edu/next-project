import { MovieListItem } from "./movie-list-item.server";

export interface MovieList {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_result: number;
}
