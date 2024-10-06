import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { NowPlayingMovieCard, useNowPlayingMovieListQuery } from "@/entities/movie-list";
import { screenBreakPoints } from "@/shared/styles";

const swiperBreakPoints: SwiperOptions["breakpoints"] = {
  [parseInt(screenBreakPoints.sm)]: { slidesPerView: 4, spaceBetween: 12 },
  [parseInt(screenBreakPoints.md)]: { slidesPerView: 5, spaceBetween: 16 },
};

export function NowPlayingMovieList() {
  const { data: nowPlayingMovieList, status: nowPlayingMovieListStatus } = useNowPlayingMovieListQuery();

  // useQueries(movieListQueries.nowPlayingMovieList());

  if (nowPlayingMovieListStatus === "pending") {
    return <div>Loading...</div>;
  }

  if (nowPlayingMovieListStatus === "error") {
    return <div>Error...</div>;
  }

  return (
    <Swiper breakpoints={swiperBreakPoints} slidesPerView={3} spaceBetween={8}>
      {nowPlayingMovieList.GeneralAudienceMovies?.map((movieInfo) => {
        return (
          <SwiperSlide key={movieInfo.id}>
            <NowPlayingMovieCard movieInfo={movieInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
