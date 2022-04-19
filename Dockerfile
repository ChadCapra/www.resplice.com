FROM node:17-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV NODE_ENV production
RUN npm run build:libs
RUN npm run build:apps


FROM node:17-alpine

WORKDIR /app

COPY --from=builder /app/apps/resplice/build .

CMD ["npx", "serve", "-p", "3000"]
