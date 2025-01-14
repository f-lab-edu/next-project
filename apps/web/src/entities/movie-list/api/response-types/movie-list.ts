import { MovieListItemDTO } from "./movie-list-item";

export interface MovieListDTO {
  page: number;
  results: MovieListItemDTO[];
  totalPages: number;
  totalResults: number;
}
