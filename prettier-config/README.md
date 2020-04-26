## Installation

Customized prettier config

### NPM

```js
npm install @ab.progr/prettier-config --save-dev
or
npm i @ab.progr/prettier-config -D
```

### YARN

```js
yarn add @ab.progr/prettier-config --dev
or
yarn add @ab.progr/prettier-config -D
```

### Usage

```js
// if using .prettierrc or .prettierrc.json, add this line
"@ab.progr/prettier-config";

// to extend the configuration to overwrite some properties from the shared configuration use .prettierrc.js
module.exports = {
  ...require("@ab.progr/prettier-config"),
  semi: false,
};
```

### DEMO

[Node-Express Boilerplate](https://github.com/AbProgr/boilerplates/blob/master/node/node-express/.eslintrc.json)
