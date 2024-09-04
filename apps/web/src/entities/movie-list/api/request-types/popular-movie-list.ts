import { BaseAxiosReq } from "@/shared/api";

export interface PopularMovieListReqParams extends BaseAxiosReq {
  page: number;
  language: string;
  region: number;
}
