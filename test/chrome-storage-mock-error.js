'use strict';

chrome.runtime = chrome.runtime || {};

chrome.storage = {
    sync: {
        get: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: (callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },

    local: {
        get: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: (callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },

    managed: {
        get: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: (keys, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: (items, callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: (callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },
   
    onChanged: {
        addListener: (callback) => {
            setTimeout(() => {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },
};
