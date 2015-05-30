chrome-storage-promise
======================

## Installation

### npm

```bash
npm install --save chrome-storage-promise
```

### bower

```bash
npm install --save chrome-storage-promise
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

## Lisence

The MIT License.
