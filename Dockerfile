FROM node:16.16.0-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json ./
RUN npm install
COPY ./SKpedia /home/node/app
RUN npm run build
CMD ["node", "./dist/app.js"]