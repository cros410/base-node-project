FROM node:12.8.0-alpine as build-stage

WORKDIR /usr/src/app
COPY package*.json yarn.lock* ./
RUN yarn install
COPY . .
RUN yarn build

#  Create the image based on the official Node 12.8.0 image from DockerHub
FROM node:12.8.0-alpine
WORKDIR /usr/src/app
COPY --from=build-stage /usr/src/app/package.json .
COPY --from=build-stage /usr/src/app/build .
RUN yarn install --prod
# # Expose the port the app runs in
EXPOSE 4000

CMD [ "npm", "start" ]
