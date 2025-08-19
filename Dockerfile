# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# Stage 2: Serve the application
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
# You might also need to copy the package.json and server.js to install express
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server.js ./

RUN pnpm install --prod

EXPOSE 8080

CMD ["node", "server.js"]
