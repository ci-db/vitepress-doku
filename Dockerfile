FROM node:alpine
WORKDIR /app

COPY . .

CMD ["yarn", "docs:dev"]