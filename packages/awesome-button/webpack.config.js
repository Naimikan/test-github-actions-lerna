/**
 * @license
 * This source code is and remains the property of UserZoom Technologies Inc (sucursal en España).
 * Dissemination of this information or reproduction of this material is strictly
 * forbidden unless prior written permission is obtained from
 * UserZoom Technologies Inc (sucursal en España) (https://www.userzoom.com).
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const babelConfig = require(path.resolve(__dirname, 'babel.config.js')); // eslint-disable-line import/no-dynamic-require

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({ modulesFromFile: true }),
  ],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
};
