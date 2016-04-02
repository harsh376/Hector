[![Build Status](https://travis-ci.org/harsh376/Hector.svg?branch=master)](https://travis-ci.org/harsh376/Hector)

- webpack, webpack-dev-server
- babel
    + babel-presets
- mocha, chai, jsdom
    + test_helper: jsdom versions of document and window
- immutable, chai-immutable
    + test_helper: `chai.user(chaiImmutable)
- test command in package.json
- react, react-dom
- react-hot-loader
- react-addons-pure-render-mixin
- redux, react-redux
- webpack.config.js, index.html
- src/index.js, src/App.js

*Component hierarchy*

- Filter
    + SearchBar
    + ResultsList
        * Item


- App (Container)
    + IndexPage (Container)
        * Filter (Component)
            - SearchBar
            - ResultsList
                + Item
    + OtherPage (Container)


- server.js
- webpack.config.js
- src/index.js                          // ReactDOM.render, Router
- src/components/App.js                 // wrapper for route paths
- src/components/Filter/Filter.js


- add routing
- add reducer unit test
- add reducer
- create store in index.js
    + dispatch init action
- containers for different routes
    + connect containers to state
- create action creators file
- create middleware
