FROM node:14 as build-stage

LABEL version="1.0"
LABEL description="ReactJS Frontend"
LABEL maintainer = ["test1@test.com", "test2@test.com"]

WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY ./ /app/

RUN yarn build



FROM nginx:stable-alpine

COPY --from=build-stage /app/build/ /var/www/mdu/
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
