FROM node:16.16.0-alpine
RUN mrdir /app
COPY package*.json /app
RUN npm install
COPY SKpedia /app
RUN npm run build
CMD ["node", "app.js"]