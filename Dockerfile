FROM node:16.16.0-alpine
COPY ./SKpedia /app
RUN git config --global url."https://${process.env.GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"
RUN npm install --ignore-scripts --quiet && npm cache clean --force
RUN git config --global --unset url."https://${process.env.GITHUB_TOKEN}@github.com/".insteadOfRUN npm run build
CMD ["node", "app.js"]