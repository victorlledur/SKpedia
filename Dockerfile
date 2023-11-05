FROM node:16.16.0-alpine
ADD git://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@github.com/victorlledur/SKpedia.git#refs/heads/mybranch /app
RUN npm install
COPY ./SKpedia /app
RUN npm run build
CMD ["node", "app.js"]