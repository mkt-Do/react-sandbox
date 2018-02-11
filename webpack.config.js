const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = [
  {
    entry: __dirname + '/src/js/index.js',
    output: {
      path: __dirname + '/dist/js/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [ 'env', 'flow', 'react', 'stage-2' ],
          },
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3000,
    },
    resolve: {
      extensions: [ '.js', '.jsx' ]
    },
  },
  {
    entry: {
      style: __dirname + '/src/scss/style.scss',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          }),
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
  },
];


