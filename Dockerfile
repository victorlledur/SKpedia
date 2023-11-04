FROM node:16.16.0-alpine
COPY package*.json ./
RUN npm run start
COPY ./SKpedia /app
CMD ["node", "app.js"]