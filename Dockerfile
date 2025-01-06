# build
FROM node:18.20.5-alpine3.21 AS build

RUN npm i -g pnpm@8.15.6

WORKDIR /next-project
COPY . .


RUN pnpm install
RUN pnpm build --filter=web

# # web
FROM node:18.20.5-alpine3.21

WORKDIR /app

COPY --from=build /next-project/apps/web/node_modules /app/node_modules
COPY --from=build /next-project/apps/web/.next /app/.next
COPY --from=build /next-project/apps/web /app

CMD ["pnpm", "run", "start"]



