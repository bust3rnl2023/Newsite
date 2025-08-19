FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "preview"]

