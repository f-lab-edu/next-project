import Head from "next/head";

import { PopularMovieList } from "@/features/get-popular-movie-list";
import { UpcomingMovieList } from "@/features/get-upcoming-movie-list";
import { popularMovieListTitle } from "@/pages/home";
import { Col } from "@/shared/ui/col";
import { Container } from "@/shared/ui/container";
import { Row } from "@/shared/ui/row";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Container>
        <Row>
          <Col lg={12} md={12} sm={4}>
            <h2 className={popularMovieListTitle}>트렌드</h2>
            <PopularMovieList />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={4}>
            <h2 className={popularMovieListTitle}>공개 예정작</h2>
            <UpcomingMovieList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
