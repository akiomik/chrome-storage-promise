chrome-storage-promise
======================

[![npm version](https://badge.fury.io/js/chrome-storage-promise.svg)](http://badge.fury.io/js/chrome-storage-promise)
[![Bower version](https://badge.fury.io/bo/chrome-storage-promise.svg)](http://badge.fury.io/bo/chrome-storage-promise)

## Installation

### npm

```bash
npm install --save chrome-storage-promise
```

### bower

```bash
bower install --save chrome-storage-promise
```

## Usage

```js
chrome.storage.promise.local.set({'foo': 'bar'}).then(function() {
  console.log('set');
});

chrome.storage.promise.local.get('foo').then(function(items) {
  console.log(items); // => {'foo': 'bar'}
});
```

## Development

### Build

```
npm install
npm run build
```

### Test

```
npm install
npm run build
npm test
```

## Lisence

The MIT License.
