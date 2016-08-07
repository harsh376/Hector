FROM node:5.2.0

WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
RUN npm install
ADD . /usr/src/app

EXPOSE 4000

CMD ["sh", "-c", "npm run deploy"]
