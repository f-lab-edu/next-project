import { BaseAxiosRes } from "@/shared/api";

import { MovieListItem } from "./movie-list-item";

export interface MovieListRes extends BaseAxiosRes {
  page: number;
  results: MovieListItem[];
}
