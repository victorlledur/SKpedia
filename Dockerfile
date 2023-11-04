FROM node:19-bullseye
WORKDIR /SKpedia/src/app
COPY ./SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "app.js"]