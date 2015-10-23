'use strict';

export function unrequireAll() {
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key];
    });
}

