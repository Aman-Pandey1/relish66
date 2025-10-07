FROM node:20 as builder
WORKDIR /app

# Install dependencies for server and client
COPY server/package*.json server/
COPY client/package*.json client/
RUN npm ci --prefix server && npm ci --prefix client

# Copy sources
COPY server server
COPY client client

# Build client
RUN npm run build --prefix client

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production

# Copy server source and built client assets
COPY --from=builder /app/server /app/server
COPY --from=builder /app/client/dist /app/client/dist

# Install server production dependencies only
COPY server/package*.json ./server/
RUN npm ci --omit=dev --prefix server

# Install pm2 for robust runtime restarts
RUN npm i -g pm2@5

EXPOSE 5000
# Use pm2-runtime so the process is supervised inside Docker
# Auto-restart on memory leaks and keep a stable process name
CMD ["pm2-runtime", "server/src/server.js", "--name", "relish66-server", "--max-memory-restart", "350M"]

