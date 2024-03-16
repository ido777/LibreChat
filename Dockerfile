# v0.7.1

# Base node image
FROM node:18-alpine3.18 AS node

# Set working directory
WORKDIR /app

RUN npm config set fetch-retry-maxtimeout 300000 \
    && apk add --no-cache g++ make python3 py3-pip curl\
    && npm install -g node-gyp rollup

RUN mkdir -p /app && chown node:node /app

USER node

COPY --chown=node:node . .

# Allow mounting of these files, which have no default
# values.
RUN touch .env
RUN npm config set fetch-retry-maxtimeout 600000
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-mintimeout 15000
RUN npm install --no-audit

# React client build
ENV NODE_OPTIONS="--max-old-space-size=2048"

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

# Create directories for the volumes to inherit
# the correct permissions
RUN mkdir -p /app/client/public/images /app/api/logs


# Final stage to prepare the runtime image
FROM base AS node
COPY --from=builder /app .
EXPOSE 3080
ENV HOST=0.0.0.0
CMD ["npm", "run", "backend"]
