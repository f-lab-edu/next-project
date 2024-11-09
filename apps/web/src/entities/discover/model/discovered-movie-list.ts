import { MovieListDTO, MovieListModel } from "@/entities/movie-list";

export default class DiscoveredMovieListModel extends MovieListModel {
  constructor(data: MovieListDTO) {
    super(data);
  }
}
