FROM oven/bun:1 AS base

RUN dir

RUN bun install
RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "dev"]