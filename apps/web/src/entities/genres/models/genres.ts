import { GenresDTO } from "../api";

export class GenresModel {
  constructor(private genresList: GenresDTO) {}

  get GenresList() {
    return this.genresList.genres.reduce((prev, { id, name }) => {
      return prev.set(id, { id, name });
    }, new Map<number, GenresDTO["genres"][0]>());
  }
}
