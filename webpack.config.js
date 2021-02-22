const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    infinity: './Infinity_scroll/js/main.js',
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'public'),
  }
};