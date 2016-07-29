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

- App (Container)
  + Auth (Component)
  + IndexPage (Container)
    * Filter (Component)
      - SearchBar
      - ResultsList
        + Item
  + OtherPage (Container)

---

### License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
