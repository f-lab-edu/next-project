import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useFilteredMovieList } from "@/entities/filter/api/queries";
import { genresQueryKeys } from "@/entities/genres";
import { GenresApi } from "@/entities/genres";
import { NowPlayingMovieCard } from "@/entities/movie-list";
import { Filter, FilteredContent, FilterProvider, useFilter, useVirtualizerOptions } from "@/features/filter";
import { useInfiniteGridWindowVirtualizer } from "@/shared/lib";
import { MovieListWithFilter } from "@/shared/ui/movie-list-with-filter";

function NowPlayingMoveListPage({ dehydratedState }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filterInfo, dispatch] = useFilter();

  const { data, status, hasNextPage, isFetchingNextPage, fetchNextPage } = useFilteredMovieList({
    withGenre: Array.from(filterInfo.checkedGenres).join(","),
  });

  const { lanes, overscan } = useVirtualizerOptions();

  const dataLength = data?.GeneralAudienceMovies.length ?? 0;

  const { scrollContainer, rowVirtualizer, colVirtualizer } = useInfiniteGridWindowVirtualizer({
    rowOptions: {
      count: hasNextPage ? dataLength / lanes + 1 : dataLength,
      estimateSize: () => 50,
      overscan,
    },
    colOptions: {
      count: lanes,
      estimateSize: () => 190,
      overscan,
    },
  });

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <MovieListWithFilter>
        <MovieListWithFilter.Filter>
          <FilterProvider value={{ ...filterInfo, dispatch }}>
            <Filter />
          </FilterProvider>
        </MovieListWithFilter.Filter>

        <MovieListWithFilter.Content>
          {status === "pending" ? (
            <div>Loading...</div>
          ) : (
            <FilteredContent
              columnVirtualizer={colVirtualizer}
              fetchNextPage={() => fetchNextPage()}
              hasNext={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              itemComp={NowPlayingMovieCard}
              lanes={lanes}
              movieList={data}
              ref={scrollContainer}
              rowVirtualizer={rowVirtualizer}
            />
          )}
        </MovieListWithFilter.Content>
      </MovieListWithFilter>
    </HydrationBoundary>
  );
}

export const getServerSideProps = (async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [...genresQueryKeys.movieGenres({ language: "ko-KR" })],
    queryFn: () => GenresApi.getMovieGenres({ language: "ko-KR" }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps<{ dehydratedState: DehydratedState }>;

export default NowPlayingMoveListPage;
