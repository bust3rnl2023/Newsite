# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# [FIX] Install pnpm globally using npm, which is available in the base image.
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# This command should now succeed
RUN pnpm install

COPY . .

RUN pnpm run build

# Stage 2: Serve the application
FROM node:20-alpine

WORKDIR /app

# [OPTIONAL] Install pnpm for the production stage, if needed.
# This is generally not required unless you need to run pnpm commands in the final container.
# If your server.js relies on an executable installed by pnpm in production, you would need this.
# Otherwise, you can skip this step to keep the final image as small as possible.
# RUN npm install -g pnpm

# Since the build output is a standalone dist folder, you don't need to copy everything
# from the builder stage. You only need the production dependencies.
# The 'pnpm install --prod' in the builder stage is not ideal because it installs
# production dependencies *before* the build, which might not be what you want.
# Instead, you should prune the dev dependencies after the build, or install them separately.

# [CORRECTION/IMPROVEMENT] Copy only the necessary files for a production environment.
# Since pnpm's node_modules structure is different, you cannot simply copy the node_modules folder.
# You need to run 'pnpm install --prod' in the final stage.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# [CORRECTION] It is better to run pnpm install --prod in the final stage.
RUN pnpm install --prod

# Copy any other files needed for the final image, like your server entrypoint
COPY --from=builder /app/server.js ./

EXPOSE 8080

CMD ["node", "server.js"]
