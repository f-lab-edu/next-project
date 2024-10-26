import { MovieListItem } from "./movie-list-item.server";

export interface MovieList {
  page: number;
  result: MovieListItem[];
  total_pages: number;
  total_result: number;
}
