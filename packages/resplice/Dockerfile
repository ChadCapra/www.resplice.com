FROM node:16-apline

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

CMD ["npm", "run", "start"]
