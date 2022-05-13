# Resplice Web

This is the monorepo for all Resplice web products

## Build & Run

### Node

Use this method if you have node installed on your local machine:

1. Install dependencies.

```sh
npm install
```

2. Build shared libraries

```sh
npm run build:libs
```

3. Build applications

```sh
npm run build:apps
```

4. Finally, run the application of your choice.

```sh
npm run resplice:preview
```

or

```sh
npm run reauth:preview
```

### Docker

Use this method if you do not have node installed or would just prefer to use docker:

1. Create a docker-compose file or use the one checked into the [umbrella repo](https://github.com/ChadCapra/resplice)

```yaml
version: '3.9'
services:
  resplice-ui:
    container_name: resplice-ui
    build:
      context: ./web
      dockerfile: Dockerfile
      args:
        - BUILD_CONTEXT=resplice
    ports:
      - 3000:3000

  reauth-ui:
    container_name: reauth-ui
    build:
      context: ./web
      dockerfile: Dockerfile
      args:
        - BUILD_CONTEXT=reauth
    ports:
      - 3010:3000

networks:
  default:
    name: resplice
```

2. Run the service of your choice.

```sh
docker compose up resplice-ui
```

or

```sh
docker compose up reauth-ui
```

## Development

### Structure

This repo is a monorepo with NPM workspace support. Here is an outline of its structure:

- `apps/*`: This workspace contains all web applications.
  - `reauth`: This is the web application containing the resplice authentication flow.
  - `resplice`: This is the main consumer web application.

- `libs/*`: This workspace contains all shared libraries across web apps and sites.
  - `re-components`: This is the share svelte component library for all web apps.
  - `re-proto`: This is the TypeScript library generated from Resplice protobuf files.
  - `re-utils`: This is a library containing common utility functions for web apps and sites.

- `sites/*`: This workspace contains all marketing and analytic sites.
  - `landing`: This is the main Resplice marketing website.
  - `stats`: This is the public analytics site for Resplice.

### Setting Up A Development Environment

1. Install [NodeJS](https://nodejs.org/en/) or [nvm](https://github.com/nvm-sh/nvm)

2. Install workspace dependencies: `npm install`

3. Build libraries: `npm run build:libs`

4. Spin up the Vite dev server: `npm run resplice`
