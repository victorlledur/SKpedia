FROM node:16.16.0-alpine
ADD git@github.com:victorlledur/SKpedia.git /app
COPY ./SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "app.js"]