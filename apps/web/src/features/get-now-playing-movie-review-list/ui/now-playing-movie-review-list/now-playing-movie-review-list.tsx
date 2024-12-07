import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { useNowPlayingMovieListReviewsQuery } from "@/entities/reviews";
import { NowPlayingMovieReviewCard } from "@/entities/reviews";
import { screenBreakPoints } from "@/shared/styles";

const swiperBreakPoints: SwiperOptions["breakpoints"] = {
  [parseInt(screenBreakPoints.sm)]: { slidesPerView: 2, spaceBetween: 12 },
  [parseInt(screenBreakPoints.md)]: { slidesPerView: 3, spaceBetween: 16 },
};

export function NowPlayingMovieReviewList() {
  const { data, status } = useNowPlayingMovieListReviewsQuery();

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <Swiper breakpoints={swiperBreakPoints} slidesPerView={1} spaceBetween={8}>
      {data.Reviews.map((review) => {
        return (
          <SwiperSlide key={review.reviewId}>
            <NowPlayingMovieReviewCard review={review} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
