[![Build Status](https://travis-ci.org/harsh376/Hector.svg?branch=master)](https://travis-ci.org/harsh376/Hector)

---

### Usage

**Installation**

`npm install`

**Running the application**

`nvm use`

`npm start`

**Running tests**

`npm test`

**Adding npm dependencies**

`npm install --save-dev <package>`

`npm run shonkwrap`

---

### Docker

#### Docker: dev

**Configure IP for Ajax in `Hector/src/server/lib/config.js`**

`ifconfig -a` (en0: inet)

**Need node_modules since we are mounting the directory**

`cd ~/Desktop/dev/hector && npm install`

**Building image and running container**

*Method 1*

`docker build -t hector_web .`

`docker-compose up`

*Method 2*

In `docker-compose.override.yml`, replace
`image: hector_web` with `build: .`

`docker-compose up`

Dockerfile -> docker-compose.yml -> docker-compose.override.yml

#### Docker: prod

**Configure IP in:**

1. `Hector/src/server/lib/config.js`
2. `server/lib/redisClient.js`

`ifconfig -a` (en0: inet)

**Start Redis server**

`redis-server --protected-mode no`

**Build image**

`docker build -t hector .`

**Run container**

`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`

Dockerfile -> docker-compose.yml -> docker-compose.prod.yml

#### Pushing an image to docker hub

[https://docs.docker.com/engine/getstarted/step_six/]

`docker tag <imageId> harsh376/<imageName>:<tag>`

`docker login`

`docker push harsh376/<imageName>`

---

### Component hierarchy**

- App
  + Auth
    * LayoutTwo
      - SidebarContainer
        + Sidebar
          * div: sidebarHeader
          * div: sidebarContent
          * div: sidebarFooter
      - div: contentTwo
        + TodoPageContainer
        + FilterPageContainer
        + NoMatchContainer

---

### Translations

- Add locale in `index.js` using `addLocaleData`
  + `TODO`: Move this into separate file
- Add translations for the supported locales in `translations/translations.json`
  + The build step, `npm run start`, parses the components and extracts the text tagged for translation into `extracted-messages/`
  + `TODO`: Combine the extracted messages --> `translations/translations.json`
- More info: [https://github.com/yahoo/react-intl]

---

### License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
