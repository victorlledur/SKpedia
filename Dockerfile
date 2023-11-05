FROM node:16.16.0-alpine
COPY ./SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "app.js"]