FROM node:12.8.0-alpine

WORKDIR /code
COPY package*.json yarn.lock* ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 4000
CMD [ "yarn", "start" ]
