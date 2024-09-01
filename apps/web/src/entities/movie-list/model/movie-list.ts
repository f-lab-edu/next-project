import { MovieListRes } from "../api/response-types/movie-list";

export class MovieList {
  constructor(private popularMovieList: MovieListRes | null) {
    Object.assign(this, popularMovieList);
  }

  get allPeopleWatch() {
    if (!this.popularMovieList) {
      return null;
    }

    return this.popularMovieList.results.filter(({ adult }) => !adult);
  }
}
