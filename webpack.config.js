const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, 'module'),
    }
}