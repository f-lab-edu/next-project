import { MovieListDTO, MovieListModel } from "@/entities/movie-list";

export default class FilteredMovieListModel extends MovieListModel {
  constructor(data: MovieListDTO) {
    super(data);
  }
}
