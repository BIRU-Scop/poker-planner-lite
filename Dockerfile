# Step 1: Build the dev environment
ARG NODE_VERSION=20
FROM node:${NODE_VERSION} AS dev-env
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .

# Step 2: Build the production environment
FROM dev-env as builder
ARG CONFIGURATION=production
ENV NODE_ENV production
## app args (don't put any quotes because quotes are already present in the environment file)
ARG RELEASE_VERSION
ARG MQTT_HOST=localhost
ARG MQTT_USER=user
ARG MQTT_PWD=password
ARG MQTT_PORT=8080
WORKDIR /app
## replace args in environment file
RUN apt-get update && apt-get install -y gettext-base && rm -rf /var/lib/apt/lists/*
RUN envsubst < src/environments/environment.${CONFIGURATION}.ts > res.txt
RUN mv res.txt src/environments/environment.${CONFIGURATION}.ts
## build the app in configuration passed
RUN npx ng build --configuration ${CONFIGURATION}

# Step 3: Serve the app with Caddy
FROM caddy:2-alpine
ARG CONFIGURATION=production
## app args (don't put any quotes because quotes are already present in the environment file)
ARG RELEASE_VERSION
ARG MQTT_HOST
ARG MQTT_USER
ARG MQTT_PWD
ARG MQTT_PORT
ARG APP="poker-planner-lite"
COPY --from=builder /app/dist/${APP}/browser/ /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
EXPOSE 80