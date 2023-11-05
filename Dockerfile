FROM node:16.16.0-alpine
ADD https://github.com/victorlledur/SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "/dist/app.js"]