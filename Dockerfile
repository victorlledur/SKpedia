FROM node:16.16.0-alpine
RUN npm install
COPY package*.json /app
COPY ./SKpedia /app
RUN npm run build
CMD ["node", "app.js"]