import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { UpcomingMovieCard, movieListQueries } from "@/entities/movie-list";
import { screenBreakPoints } from "@/shared/styles";

export function UpcomingMovieList() {
  const { data: upcomingMovieList, status: upcomingMovieListStatus } = useQuery(movieListQueries.upcomingMovieList());

  const swiperBreakPoints: SwiperOptions["breakpoints"] = useMemo(
    () => ({
      [parseInt(screenBreakPoints.sm)]: { slidesPerView: 4, spaceBetween: 12 },
      [parseInt(screenBreakPoints.md)]: { slidesPerView: 5, spaceBetween: 16 },
    }),
    [],
  );

  if (upcomingMovieListStatus === "pending") {
    return <div>Loading...</div>;
  }

  if (upcomingMovieListStatus === "error") {
    return <div>Error...</div>;
  }

  return (
    <Swiper breakpoints={swiperBreakPoints} slidesPerView={3} spaceBetween={8}>
      {upcomingMovieList.GeneralAudienceMovies?.map((movieInfo) => {
        return (
          <SwiperSlide key={movieInfo.id}>
            <UpcomingMovieCard movieInfo={movieInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
