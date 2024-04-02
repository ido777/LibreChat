# v0.7.1 Optimized Dockerfile

# Base node image
FROM node:18-alpine3.18 AS base

# Install system dependencies
RUN apk add --no-cache g++ make python3 py3-pip curl

# Set npm configurations
RUN npm config set fetch-retry-maxtimeout 600000 \
    && npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 15000 \
    && npm install -g node-gyp rollup

# Set working directory and permissions
WORKDIR /app
RUN mkdir -p /app/client/public/images /app/api/logs && \
    chown -R node:node /app

USER node

# Optimizing for caching by copying package.json files first
COPY --chown=node:node package*.json ./
COPY --chown=node:node client/package*.json ./client/
COPY --chown=node:node api/package*.json ./api/
COPY --chown=node:node config/* ./config/

# Install dependencies
RUN npm install --no-audit

# Copy the rest of the application code
COPY --chown=node:node . .

# Allow mounting of .env file, which has no default values
RUN touch .env

# Set environment variables
ENV NODE_OPTIONS="--max-old-space-size=2048" \
    HOST=0.0.0.0

# React client build
RUN npm run frontend

# Expose the port the app runs on
EXPOSE 3080

# Command to run the backend
CMD ["npm", "run", "backend"]
