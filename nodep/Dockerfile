FROM node:14

LABEL version="1.0"
LABEL description="NodeJS Backend"
LABEL maintainer = ["test1@test.com", "test2@test.com"]

WORKDIR /app


COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
