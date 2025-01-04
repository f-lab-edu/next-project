import { z } from "zod";

import { PopularMovieList } from "@/entities/movie-list";
import { tmdbHttpServer, withCommonRoute } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

const querySchema = z.object({
  page: z.coerce.number(),
  language: z.string(),
  region: z.string(),
});

export default withCommonRoute(
  async (req, res) => {
    const { page, language, region } = req.query as unknown as z.infer<typeof querySchema>;

    const result = await tmdbHttpServer.get<PopularMovieList>("movie/popular", { params: { page, language, region } });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.status(200).send(camelCaseObjMapper(result.data));
  },
  ["GET"],
  querySchema,
);
