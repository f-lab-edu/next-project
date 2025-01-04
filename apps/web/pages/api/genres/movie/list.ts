import { z } from "zod";

import { Genres } from "@/entities/genres";
import { tmdbHttpServer, withCommonRoute } from "@/shared/api";
import { camelCaseObjMapper } from "@/shared/lib";

const querySchema = z.object({
  language: z.string(),
});

export default withCommonRoute(
  async (req, res) => {
    const { language } = req.query as unknown as z.infer<typeof querySchema>;

    const result = await tmdbHttpServer.get<Genres>("genre/movie/list", { params: { language } });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.status(200).send(camelCaseObjMapper(result.data));
  },
  ["GET"],
  querySchema,
);
