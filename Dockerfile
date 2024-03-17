# Base image with Node.js
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

RUN npm config set fetch-retry-maxtimeout 300000 \
    && apk add --no-cache g++ make python3 py3-pip curl\
    && npm install -g node-gyp rollup

# Copy package files and install dependencies
COPY package*.json ./
COPY client/package*.json ./client/
COPY ./api/package*.json ./api/
COPY config/ /app/config/

RUN npm install

# Builder stage to build the frontend
FROM base AS builder
COPY . .
RUN npm run frontend

# Final stage to prepare the runtime image
FROM base AS node
COPY --from=builder /app .
EXPOSE 3080
ENV HOST=0.0.0.0
CMD ["npm", "run", "backend"]
