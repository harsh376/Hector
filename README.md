[![Build Status](https://travis-ci.org/harsh376/Hector.svg?branch=master)](https://travis-ci.org/harsh376/Hector)

---

### Installation

`yarn`

---

### Dev

**Running the application**

`nvm use`

`yarn run build:dev`

`yarn run start`

---

### Production

`nvm use`

`yarn run deploy`

#### Deploy

`heroku login`

`git push heroku master`

---

### Tests

`yarn test`

---

### Managing dependencies

`yarn add <package>`

---

### Docker

**Need node_modules since we are mounting the directory**

`cd ~/Desktop/dev/hector && yarn`

**Build image**

`docker build -t hector .`

**Pushing an image to docker hub**

[https://docs.docker.com/engine/getstarted/step_six/]

`docker tag <imageId> harsh376/<imageName>:<tag>`

`docker login`

`docker push harsh376/<imageName>`

**Run container**

`docker run -p 49160:3000 -d harsh376/hector:tag`

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
