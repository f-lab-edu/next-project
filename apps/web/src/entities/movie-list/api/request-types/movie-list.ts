import { BaseAxiosReq } from "@/shared/api";

export interface MovieListReqParams extends BaseAxiosReq {
  page: number;
  language: string;
  region: string;
}
