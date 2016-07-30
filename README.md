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

### Documentation

**Component hierarchy**

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
