[![Build Status](https://travis-ci.org/harsh376/Hector.svg?branch=master)](https://travis-ci.org/harsh376/Hector)

---

### Usage

**Installation**

`npm install`

#### Dev

**Running the application**

`nvm use`

`npm run build:dev`

`npm run start`

**Running tests**

`npm test`

**Adding npm dependencies**

`npm install --save-dev <package>`

`npm run shonkwrap`

#### Prod

`npm run deploy`

---

### Docker

#### Docker: dev

**Need node_modules since we are mounting the directory**

`cd ~/Desktop/dev/hector && npm install`

**Build image**

`docker build -t hector .`

**Pushing an image to docker hub**

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
