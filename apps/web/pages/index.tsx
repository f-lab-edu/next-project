import Head from "next/head";

import { PopularMovieList } from "@/features/get-popular-movie-list";
import { UpcomingMovieList } from "@/features/get-upcoming-movie-list";
import { popularMovieListTitle } from "@/pages/home";
import { Col } from "@/shared/ui/col";
import { Container } from "@/shared/ui/container";
import { Row } from "@/shared/ui/row";
import { Text } from "@/shared/ui/text";

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
            <Text as="h2" className={popularMovieListTitle} size="xl" weight="bold">
              트렌드
            </Text>
            <PopularMovieList />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={4}>
            <Text as="h2" className={popularMovieListTitle} size="xl" weight="bold">
              공개 예정작
            </Text>
            <UpcomingMovieList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
