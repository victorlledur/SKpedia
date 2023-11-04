FROM node:16.16.0-alpine
GIT_USERNAME victorlledur
GIT_PASSWORD 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
COPY ./SKpedia /app
RUN npm install
RUN npm run build
CMD ["node", "app.js"]