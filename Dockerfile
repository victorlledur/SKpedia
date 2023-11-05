FROM node:16.16.0-alpine
RUN npm install
COPY ./SKpedia /app
RUN npm run build
CMD ["node", "app.js"]