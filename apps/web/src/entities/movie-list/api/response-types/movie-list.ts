import { MovieListItem } from "./movie-list-item";

export interface MovieListRes {
  page: number;
  results: MovieListItem[];
}
