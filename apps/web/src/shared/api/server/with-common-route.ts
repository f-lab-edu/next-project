import { NextApiRequest, NextApiResponse } from "next";
import { z, ZodType } from "zod";

import { tmdbErrorCode } from "@/shared/config";

type ZodObject = ReturnType<typeof z.object<Record<string, ZodType>>>;

export function withCommonRoute<Data = unknown>(
  handler: (req: NextApiRequest, res: NextApiResponse<Data | { message: string }>) => Promise<unknown> | unknown,
  allowedMethod: string[],
  querySchema?: ZodObject,
) {
  return async (req: NextApiRequest, res: NextApiResponse<Data | { message: string }>) => {
    if (req.method && !allowedMethod.includes(req.method)) {
      return res
        .status(tmdbErrorCode["INVALID_METHOD"].code)
        .send({ message: tmdbErrorCode["INVALID_METHOD"].message });
    }

    if (querySchema) {
      const isQueriesValid = querySchema.safeParse(req.query);

      if (!isQueriesValid.success) {
        return res
          .status(tmdbErrorCode["INVALID_PARAMETERS"].code)
          .send({ message: tmdbErrorCode["INVALID_PARAMETERS"].message });
      }
    }

    try {
      await handler(req, res);
    } catch (error) {
      const message = error instanceof Error ? error.message : tmdbErrorCode["INTERNAL_ERROR"].message;
      res.status(tmdbErrorCode["INTERNAL_ERROR"].code).send({ message });
    }
  };
}
