import { BaseAxiosReq } from "@/shared/api";

export interface ReviewsReqParams extends BaseAxiosReq {
  movieId: number;
  language?: string;
  page?: number;
}
