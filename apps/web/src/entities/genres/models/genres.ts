import { createBaseModel } from "@/shared/lib";

import { GenresDTO } from "../api";

export class GenresModel extends createBaseModel<GenresDTO>() {
  constructor(private genresList: GenresDTO) {
    super(genresList);
  }

  get GenresList() {
    return this.genresList.genres.reduce((prev, { id, name }) => {
      return prev.set(id, { id, name });
    }, new Map<number, GenresDTO["genres"][0]>());
  }
}
