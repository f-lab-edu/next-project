import { AuthorDetails } from "@/entities/movies";

export interface NowPlayingMovieReview {
  id: string;
  title: string;
  posterPath: string;
  author: string;
  authorDetails: AuthorDetails;
  content: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

export interface NowPlayingMovieListReviewsDTO {
  page: number;
  results: NowPlayingMovieReview[];
}
