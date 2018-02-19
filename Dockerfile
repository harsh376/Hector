FROM node:8.9.1

RUN npm install --global yarn

WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
ADD yarn.lock /usr/src/app/yarn.lock
RUN yarn
ADD . /usr/src/app

ENV DOCKER_ENABLED=true

EXPOSE 4000

CMD ["sh", "-c", "yarn run deploy"]
