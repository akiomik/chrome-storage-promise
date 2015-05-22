module.exports = {
    entry: {
        'chrome-storage-promise': './src/chrome-storage-promise.js'
    },
    output: {
        library: 'chrome.storage',
        libraryTarget: 'this',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    }
};
