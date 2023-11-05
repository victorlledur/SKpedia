FROM node:20.9.0-alpine
ADD https://github.com/victorlledur/SKpedia ./
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm install typescript -g
RUN mkdir /app/dist
RUN tsc --build
EXPOSE 8080
CMD ["node", "./dist/index.js"]