FROM node:16.16.0-alpine
RUN npm install
RUN npm run build
COPY ./SKpedia /app
CMD ["node", "app.js"]