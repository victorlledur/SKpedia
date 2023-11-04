FROM node:16.16.0-alpine
COPY package*.json ./
RUN npm run build
COPY --chown=node:node . .
COPY ./SKpedia /app
CMD ["node", "app.js"]