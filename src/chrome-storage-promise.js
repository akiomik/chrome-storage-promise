'use strict';

chrome.storage.promise = {

    // sync
    sync: {
        get: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.sync.get(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        set: (items) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.sync.set(items, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.sync.getBytesInUse(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        remove: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.sync.remove(keys, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        clear: () => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.sync.clear(() => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        }
    },

    // local
    local: {
        get: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.local.get(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        set: (items) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.local.set(items, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.local.getBytesInUse(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        remove: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.local.remove(keys, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        clear: () => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.local.clear(() => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        }
    },

    // managed
    managed: {
        get: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.managed.get(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        set: (items) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.managed.set(items, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        getBytesInUse: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.managed.getBytesInUse(keys, (items) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
            return promise;
        },
        remove: (keys) => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.managed.remove(keys, () => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        clear: () => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.managed.clear(() => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        }
    },

    // onChanged
    onChanged: {
        addListener: () => {
            let promise = new Promise((resolve, reject) => {
                chrome.storage.onChanged.addListener((changes, areaName) => {
                    let err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(changes, areaName);
                    }
                });
            });
            return promise;
        }
    }

}

