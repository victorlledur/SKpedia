FROM node:20.9.0-alpine
ADD https://github.com/victorlledur/SKpedia ./
COPY ./ /app
WORKDIR /app
RUN npm install
RUN mkdir /app/dist
RUN tsc -p
CMD ["node", "./path/to/index.js"]