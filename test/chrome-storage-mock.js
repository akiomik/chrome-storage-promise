'use strict';

chrome.runtime = chrome.runtime || {};

chrome.storage = {
    sync: {
        get: (keys, callback) => {
            setTimeout(() => {
                callback({foo: 'bar'});
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(callback, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                callback(42);
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(callback, 100);
        },
        clear: (callback) => {
            setTimeout(callback, 100);
        },
    },

    local: {
        get: (keys, callback) => {
            setTimeout(() => {
                callback({foo: 'bar'});
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(callback, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                callback(42);
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(callback, 100);
        },
        clear: (callback) => {
            setTimeout(callback, 100);
        },
    },

    managed: {
        get: (keys, callback) => {
            setTimeout(() => {
                callback({foo: 'bar'});
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(callback, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                callback(42);
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(callback, 100);
        },
        clear: (callback) => {
            setTimeout(callback, 100);
        },
    },

    onChanged: {
        addListener: (callback) => {
            setTimeout(callback, 100);
        },
    },
};
