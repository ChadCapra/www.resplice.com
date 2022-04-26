FROM node:17-alpine as builder
ARG BUILD_CONTEXT

WORKDIR /web

COPY package.json .
COPY package-lock.json .
# COPY libs/re-components/package.json .
COPY libs/re-proto/package.json libs/re-proto/package.json
COPY libs/re-utils/package.json libs/re-utils/package.json
COPY apps/$BUILD_CONTEXT/package.json apps/$BUILD_CONTEXT/package.json

RUN npm ci

COPY . .

ENV NODE_ENV production
RUN npm run build:libs
RUN npm run build:apps


FROM node:17-alpine

WORKDIR /web

COPY --from=builder /web/apps/$BUILD_CONTEXT/build .

CMD ["npx", "serve", "-p", "3000"]
