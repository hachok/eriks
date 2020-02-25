## Eriks

The compare page with the possibility to show/hide, remove products.

## Demo

https://eriks-digital.herokuapp.com/

## Installation

In the project directory, you can run:

- `yarn install` - install dependencies
- `cp .env.sample .env` - create .env file with env variables
- `yarn start` - run app

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Commands

- `yarn build` - builds the app for production to the build folder.
- `yarn start` - run app
- `yarn prettier` - run prettier for code formatting
- `yarn tslint:fix` - fix tslint
- `yarn pre-commit` - pre-commit hook with tslint and prettier

## Structure

```|-- actions
    |-- components
        |-- pages
        |-- shared - reusable components
            ...
            |-- icons - svg components
    |-- constants
    |-- reducers
    |-- sagas
    |-- selectors
    |-- services
    |-- styles
    |-- types
    |-- utils
```

## Technologies

- react 16.12
- react-router-dom 5.1.2
- typescript 3.7.2
- redux(redux-saga) 4.0.5
- reselect 4.0.0
- styled-components 5.0.1
