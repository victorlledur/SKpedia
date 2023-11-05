FROM node:21.1.0-alpine
ADD https://github.com/victorlledur/SKpedia /app
RUN npm cache clean --force
WORKDIR /app
RUN npm install
RUN npm run build
CMD ["node", "/dist/app.js"]