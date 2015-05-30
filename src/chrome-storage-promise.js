'use strict';

chrome.storage.promise = {

    // sync
    sync: {
        get: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.sync.get(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        set: (items) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.sync.set(items, () => {
                    resolve();
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.sync.getBytesInUse(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        remove: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.sync.remove(keys, () => {
                    resolve();
                });
            });
            return promise;
        },
        clear: () => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.sync.clear(() => {
                    resolve();
                });
            });
            return promise;
        }
    },

    // local
    local: {
        get: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.local.get(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        set: (items) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.local.set(items, () => {
                    resolve();
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.local.getBytesInUse(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        remove: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.local.remove(keys, () => {
                    resolve();
                });
            });
            return promise;
        },
        clear: () => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.local.clear(() => {
                    resolve();
                });
            });
            return promise;
        }
    },

    // managed
    managed: {
        get: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.managed.get(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        set: (items) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.managed.set(items, () => {
                    resolve();
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.managed.getBytesInUse(keys, (items) => {
                    resolve(items);
                });
            });
            return promise;
        },
        remove: (keys) => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.managed.remove(keys, () => {
                    resolve();
                });
            });
            return promise;
        },
        clear: () => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.managed.clear(() => {
                    resolve();
                });
            });
            return promise;
        }
    },

    // onChanged
    onChanged: {
        addListener: () => {
            var promise = new Promise((resolve, reject) => {
                chrome.storage.onChanged.addListener((changes, areaName) => {
                    resolve(changes, areaName);
                });
            });
            return promise;
        }
    }

}

