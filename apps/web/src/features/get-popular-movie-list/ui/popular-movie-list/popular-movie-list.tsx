import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { PopularMovieCard } from "@/entities/movie-list";
import { screenBreakPoints } from "@/styles/tokens/screen.css";

import { useFetchPopularMovieListQuery } from "../../api/use-fetch-popular-movie-list";

export function PopularMovieList() {
  const { data: popularMovieList, status: popularMovieListStatus } = useFetchPopularMovieListQuery();

  const swiperBreakPoints: SwiperOptions["breakpoints"] = useMemo(
    () => ({
      [parseInt(screenBreakPoints.sm)]: { slidesPerView: 4, spaceBetween: 12 },
      [parseInt(screenBreakPoints.md)]: { slidesPerView: 5, spaceBetween: 16 },
    }),
    [],
  );

  if (popularMovieListStatus === "pending") {
    return <div>Loading...</div>;
  }

  if (popularMovieListStatus === "error") {
    return <div>Error...</div>;
  }

  return (
    <Swiper breakpoints={swiperBreakPoints} slidesPerView={3} spaceBetween={8}>
      {popularMovieList?.GeneralAudienceMovies?.map((movieInfo) => {
        return (
          <SwiperSlide key={movieInfo.id}>
            <PopularMovieCard movieInfo={movieInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
