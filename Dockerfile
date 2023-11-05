FROM node:16.16.0-alpine
ADD package*.json /app
ADD SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "/dist/app.js"]