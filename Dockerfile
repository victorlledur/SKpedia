FROM node:16.16.0-alpine
ADD git@github.com:victorlledur/SKpedia.git ./
RUN npm install
COPY ./SKpedia ./
RUN npm run build
CMD ["node", "app.js"]