'use strict';

chrome.storage = {
    sync: {
        get: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: function(callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },

    local: {
        get: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: function(callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },

    managed: {
        get: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
        clear: function(callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },
   
    onChanged: {
        addListener: function(callback) {
            setTimeout(function() {
                chrome.runtime.lastError = '42';
                callback();
            }, 100);
        },
    },
};
