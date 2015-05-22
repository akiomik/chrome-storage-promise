'use strict';

chrome.storage.promise = {

    // sync
    sync: {
        // TODO
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
        // TODO
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

