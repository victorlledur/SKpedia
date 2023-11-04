FROM node:19-bullseye
COPY ./SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "app.js"]