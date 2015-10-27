chrome-storage-promise
======================

[![npm version](https://badge.fury.io/js/chrome-storage-promise.svg)](http://badge.fury.io/js/chrome-storage-promise)
[![Bower version](https://badge.fury.io/bo/chrome-storage-promise.svg)](http://badge.fury.io/bo/chrome-storage-promise)
[![Dependency Status](https://gemnasium.com/akiomik/chrome-storage-promise.svg)](https://gemnasium.com/akiomik/chrome-storage-promise)
[![Build Status](https://travis-ci.org/akiomik/chrome-storage-promise.svg?branch=master)](https://travis-ci.org/akiomik/chrome-storage-promise)

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
// set
chrome.storage.promise.local.set({'foo': 'bar'}).then(function() {
  // resolved
  console.log('set');
}, function(error) {
  // rejected
  console.log(error);
});

// get
chrome.storage.promise.local.get('foo').then(function(items) {
  // resolved
  console.log(items); // => {'foo': 'bar'}
}, function(error) {
  // rejected
  console.log(error);
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
