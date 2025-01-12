# base
FROM node:18.20.5-alpine3.21 AS base

RUN npm i -g pnpm@8.15.6

# build
FROM base AS build

WORKDIR /next-project

COPY . .

RUN pnpm --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm deploy --filter=web --prod /web

# web
FROM base

EXPOSE 3000

WORKDIR /web

COPY --from=build /web /web

CMD ["pnpm", "start"]



