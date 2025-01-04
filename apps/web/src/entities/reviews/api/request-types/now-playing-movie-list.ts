import { BaseAxiosReq } from "@/shared/api";

export interface NowPlayingMovieListReviewsParams extends BaseAxiosReq {
  page: number;
  language: string;
  region: string;
}
