FROM node:16.16.0-alpine
ADD git@github.com:victorlledur/SKpedia.git /app
RUN npm install
COPY ./SKpedia /app
RUN npm run build
CMD ["node", "app.js"]