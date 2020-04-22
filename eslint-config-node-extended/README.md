## Installation

An eslint extension that requires zero configuration and is ready to lint node source code (under the hood uses existing eslint configs for airbnb-base and prettier).

### NPM

```js
npm install @ab.progr/eslint-config-node-extended --save-dev
or
npm i @ab.progr/eslint-config-node-extended -D
```

### YARN

```js
yarn add @ab.progr/eslint-config-node-extended --dev
or
yarn add @ab.progr/eslint-config-node-extended -D
```

### Usage

```js
// if using .eslintrc.json
{
  "extends": "@ab.progr/eslint-config-node-extended"
}

// if using .eslintrc.js
module.exports = {
  extends: [require.resolve("@ab.progr/eslint-config-node-extended")],
};
```

### DEMO

[Node-Express Boilerplate](https://github.com/AbProgr/boilerplates/blob/master/node/node-express/.eslintrc.json)
