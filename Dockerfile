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

EXPOSE 5000
CMD ["node","server/src/server.js"]

