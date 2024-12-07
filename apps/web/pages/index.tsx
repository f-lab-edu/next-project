import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { genresQueryKeys } from "@/entities/genres";
import GenresApi from "@/entities/genres/api/genres-api";
import { reviewsQueryKeys } from "@/entities/reviews";
import ReviewsApi from "@/entities/reviews/api/reviews-api";
import { NowPlayingMovieList } from "@/features/get-now-playing-movie-list";
import { NowPlayingMovieReviewList } from "@/features/get-now-playing-movie-review-list";
import { PopularMovieList } from "@/features/get-popular-movie-list";
import { UpcomingMovieList } from "@/features/get-upcoming-movie-list";
import { MovieListLinkButton } from "@/features/navigate-page";
import { movieListTitleWrapper, mainListTitle } from "@/pages/home";
import { Col } from "@/shared/ui/col";
import { Container } from "@/shared/ui/container";
import { Row } from "@/shared/ui/row";
import { Text } from "@/shared/ui/text";

export default function Home({ dehydratedState }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Container>
        <Row>
          <Col lg={12} md={12} sm={4}>
            <Text as="h2" className={mainListTitle} size="xl" weight="bold">
              리뷰
            </Text>
            <NowPlayingMovieReviewList />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12} md={12} sm={4}>
            <div className={movieListTitleWrapper}>
              <Text as="h2" className={mainListTitle} size="xl" weight="bold">
                현재 상영작
              </Text>
              <MovieListLinkButton href="now-playing" />
            </div>
            <NowPlayingMovieList />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={4}>
            <Text as="h2" className={mainListTitle} size="xl" weight="bold">
              트렌드
            </Text>
            <PopularMovieList />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={4}>
            <Text as="h2" className={mainListTitle} size="xl" weight="bold">
              공개 예정작
            </Text>
            <UpcomingMovieList />
          </Col>
        </Row>
      </Container>
    </HydrationBoundary>
  );
}

export const getServerSideProps = (async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [...genresQueryKeys.movieGenres({ language: "ko-KR" })],
    queryFn: () => GenresApi.getMovieGenres({ language: "ko-KR" }),
  });

  await queryClient.prefetchQuery({
    queryKey: [...reviewsQueryKeys.nowPlayingMovieList({ page: 1, language: "ko-KR", region: "KR" })],
    queryFn: () => ReviewsApi.getNowPlayingMovieList({ page: 1, language: "ko-KR", region: "KR" }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps<{ dehydratedState: DehydratedState }>;
