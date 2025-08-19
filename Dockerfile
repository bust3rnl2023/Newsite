# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# [CORRECTION] Copy ALL files first, before running any commands.
# This ensures that all necessary source code and config files are present.
COPY . .

# [FIX] Install pnpm globally using npm, which is available in the base image.
RUN npm install -g pnpm

# The pnpm install command now runs with all files in place.
# pnpm will cache dependencies, so it should still be efficient.
RUN pnpm install

# The build command now has access to all source files
RUN pnpm run build

# Stage 2: Serve the application
FROM node:20-alpine

WORKDIR /app

# [OPTIONAL] Install pnpm for the production stage, if needed.
# This is generally not required unless you need to run pnpm commands in the final container.
# If your server.js relies on an executable installed by pnpm in production, you would need this.
RUN npm install -g pnpm

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist
# Copy the server entrypoint and package files
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Run pnpm install --prod to get the production dependencies
RUN pnpm install --prod

EXPOSE 8080

CMD ["node", "server.js"]
