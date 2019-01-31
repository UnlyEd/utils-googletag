[![Build Status](https://travis-ci.com/UnlyEd/utils-googletag.svg?branch=master)](https://travis-ci.com/UnlyEd/utils-googletag)
[![Maintainability](https://api.codeclimate.com/v1/badges/05706e666bcc599716ee/maintainability)](https://codeclimate.com/github/UnlyEd/utils-googletag/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/05706e666bcc599716ee/test_coverage)](https://codeclimate.com/github/UnlyEd/utils-googletag/test_coverage)

# Utils Googletag

This project is a transversal project, helpers for google tag manager

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

npm or yarn

```
npm install @unly/utils-googletag
```

Use:

```
const { gaPageview, initializeAsHTML, convertTrackingIDToGTag } = require('@unly/utils-googletag');
```

## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT

