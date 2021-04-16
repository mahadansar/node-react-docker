FROM node:10.1 as build-step
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build-step /build /var/www/mdu/
COPY default.conf /etc/nginx/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
