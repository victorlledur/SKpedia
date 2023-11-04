FROM node:16.16.0-alpine
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build
COPY ./SKpedia /app
CMD ["node", "app.js"]