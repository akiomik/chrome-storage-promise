'use strict';

chrome.storage = {
    sync: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    local: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    managed: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    onChanged: {
        addListener: function(callback) {
            setTimeout(callback, 100);
        },
    },
};
