import { MovieListItemDTO } from "./movie-list-item";

export interface MovieListDTO {
  page: number;
  results: MovieListItemDTO[];
  total_pages: number;
  total_results: number;
}
