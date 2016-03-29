FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Default Environment variables
ENV NODE_ENV=production
ENV PORT=4000

# dev: 3000, prod: 4000
EXPOSE 3000 4000

CMD [ "npm", "run", "deploy" ]
