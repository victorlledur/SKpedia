FROM node:16.16.0-alpine
RUN mkdir /app
ADD package*.json /app
RUN npm install
ADD SKpedia /app
RUN npm run build
CMD ["node", "/dist/app.js"]