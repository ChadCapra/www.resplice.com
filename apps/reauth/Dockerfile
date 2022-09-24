FROM node:17-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
COPY . .

ENV NODE_ENV production
RUN npm run build


FROM node:17-alpine

WORKDIR /app

COPY --from=builder /app/build .

CMD ["npx", "serve", "-p", "3000"]
