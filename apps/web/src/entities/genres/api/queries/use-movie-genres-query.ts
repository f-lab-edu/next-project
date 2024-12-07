import { useQuery } from "@tanstack/react-query";

import { GenresModel } from "../../models";
import GenresApi from "../genres-api";
import { GenresReqParams } from "../request-types";

import { genresQueryKeys } from "./query-keys";

export const useMovieGenresQuery = ({ language }: GenresReqParams = { language: "ko-KR" }) => {
  return useQuery({
    queryKey: [...genresQueryKeys.movieGenres({ language })],
    queryFn: () => GenresApi.getMovieGenres({ language }),
    select: (data) => new GenresModel(data),
    staleTime: 10 * 1000 * 60,
  });
};
