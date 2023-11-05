FROM node:20.9.0-alpine
ADD https://github.com/victorlledur/SKpedia ./
COPY ./ /app
WORKDIR /app
RUN npm install
RUN mkdir /app/dist
RUN npm run build
CMD ["node", "index.js"]