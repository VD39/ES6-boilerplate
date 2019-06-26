# ES6 Boilerplate With Webpack 4

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)

My personal ES6 boilerplate built with Babel, Webpack 4, PostCSS, ESLint, and Stylelint.

> Feel free to use. :)

## Folder structure

Below is the folder structure.

```
src
└── css
│    ├── all
│    └── styles.css
└── index.js
public
├── assets
├── favicon.ico
└── index.html
```

Add your styles to the `all` folder and use the `@import` to add to the `styles.css` file.

Add your assets, such as images to the `assets` folder.

The `index.js` is the main ES6 file, import all libraries there.

Edit the `index.html` in the public folder to suite your needs.

Replace the `favicon.ico` with your own icon.

## Configuration

You can change a few configuration for Webpack in the `.config.js` file within the root folder (default settings below).

```
const hostName = 'localhost';
const portNumber = 9000;
const jsOutput = './assets/js/bundle.js';
const cssOutput = './assets/css/styles.css';
```

Changes to Webpack can be made in the `config` folder.

## To Use

### Install dependencies

```sh
npm install

or

yarn install
```

### Server

```sh
npm run serve

or

yarn serve
```

Will create a server at `http://localhost:9000/` or the port number if you changed this in the `config.js` file.

### Build

```sh
npm run build

or

yarn build
```

### Lint

JavaScript

```sh
npm run lint:js

or

yarn lint:js
```

CSS

```sh
npm run lint:css

or

yarn lint:css
```

Fix

```sh
npm run lint:fix

or

yarn lint:fix
```

## License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
