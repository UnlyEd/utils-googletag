# unly-utils-googletag

This project is a transversal project, helpers for google tag manager

Install:

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-utils-googletag.git
```

Use:

```
const { generateTracker } = require('unly-utils-googletag');
```

Library:

|   | param(s)         |  |
| :--------------- |:---------------:| :-----:|
| generateTracker |  trackingId  | generate a tracker based on trackingId |
| pageview   | trackingId, { url, path, title } |  |
| gtagEvent  | { action, category, label, value } |  |
| gaPageview  | tracker |  |
| initializeAsHTML | trackingId | |

## Development

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```

### Lint

```
yarn run lint
```
