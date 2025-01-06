# base
FROM node:18.20.5-alpine3.21 AS base

RUN npm i -g pnpm@8.15.6

# build
FROM base AS build

WORKDIR /next-project
COPY . .

RUN pnpm install
RUN pnpm build --filter=web

EXPOSE 3000

CMD ["pnpm", "run", "--filter=web", "start"]

# # web
# FROM base

# WORKDIR /app

# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=build /app/.next /app/.next
# COPY --from=build /app /app

# CMD ["pnpm", "start"]



