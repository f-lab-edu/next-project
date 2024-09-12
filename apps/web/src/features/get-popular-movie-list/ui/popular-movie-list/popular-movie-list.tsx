import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { PopularMovieCard, movieListQueries } from "@/entities/movie-list";
import { screenBreakPoints } from "@/shared/styles";

const swiperBreakPoints: SwiperOptions["breakpoints"] = {
  [parseInt(screenBreakPoints.sm)]: { slidesPerView: 4, spaceBetween: 12 },
  [parseInt(screenBreakPoints.md)]: { slidesPerView: 5, spaceBetween: 16 },
};

export function PopularMovieList() {
  const { data: popularMovieList, status: popularMovieListStatus } = useQuery(movieListQueries.popularMovieList());

  if (popularMovieListStatus === "pending") {
    return <div>Loading...</div>;
  }

  if (popularMovieListStatus === "error") {
    return <div>Error...</div>;
  }

  return (
    <Swiper breakpoints={swiperBreakPoints} slidesPerView={3} spaceBetween={8}>
      {popularMovieList.GeneralAudienceMovies?.map((movieInfo) => {
        return (
          <SwiperSlide key={movieInfo.id}>
            <PopularMovieCard movieInfo={movieInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
