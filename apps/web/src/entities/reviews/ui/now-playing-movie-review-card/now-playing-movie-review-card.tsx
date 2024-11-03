import { AspectRatio } from "@repo/ui/aspect-ratio";
import Image from "next/image";

import { NowPlayingMovieReviewModel } from "@/entities/reviews";
import { Text } from "@/shared/ui/text";

import {
  reviewCardContainer,
  reviewCardTitle,
  reviewCardContent,
  reviewMovieTitle,
  reviewContent,
  reviewCardPosterWrapper,
  reviewCardContentWrapper,
} from "./now-playing-movie-review-card.css";

export function NowPlayingMovieReviewCard({ review }: { review: NowPlayingMovieReviewModel }) {
  return (
    <article className={reviewCardContainer}>
      <div className={reviewCardTitle}>
        <Text color="tertiaryText" size="sm">
          {review.AuthorDetails.UserName}
        </Text>
        <Text color="tertiaryText" size="sm">
          {review.AuthorDetails.ScoreMaximumFive}
        </Text>
      </div>

      <div className={reviewCardContent}>
        <div className={reviewCardPosterWrapper}>
          <AspectRatio ratio={10 / 7}>
            <Image
              alt={`${review.movieTitle} poster image`}
              height={100}
              src={`${process.env.NEXT_PUBLIC_TMDB_RESOURCE_BASE_URL}/t/p/w200${review.posterPath}`}
              style={{ width: "100%", height: "100%" }}
              width={100}
            />
          </AspectRatio>
        </div>
        <div className={reviewCardContentWrapper}>
          <Text as="h1" className={reviewMovieTitle} size="md" weight="medium">
            {review.movieTitle}
          </Text>
          <Text className={reviewContent} color="tertiaryText" lineHeight="5" size="md">
            {review.content}
          </Text>
        </div>
      </div>
    </article>
  );
}
