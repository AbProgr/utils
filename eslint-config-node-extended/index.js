module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:node/recommended",
    "plugin:security/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["security", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    "logs/",
    "*.test.js",
    "*.spec.js",
    "*.log",
    "*.lock",
    "*.json",
  ],
  rules: {
    "prettier/prettier": "error",
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
  },
};
