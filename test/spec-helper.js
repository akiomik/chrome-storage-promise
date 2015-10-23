'use strict';

function unrequireAll(req, mod) {
    Object.keys(require.cache).forEach(function(key) {
        delete require.cache[key];
    });
}

module.exports = {
    unrequireAll: unrequireAll,
};
