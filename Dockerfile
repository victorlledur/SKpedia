FROM node:16.16.0-alpine
ADD https://github.com/victorlledur/SKpedia /app
RUN npm cache clean --force
RUN npm run build
CMD ["node", "/dist/app.js"]