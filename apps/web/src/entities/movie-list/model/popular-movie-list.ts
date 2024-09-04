import { PopularMovieListRes } from "../api";

export default class PopularMovieList {
  constructor(popularMovieList: PopularMovieListRes) {
    Object.assign(this, popularMovieList);
  }
}
