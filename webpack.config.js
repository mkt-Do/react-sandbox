const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = [
  {
    entry: __dirname + '/src/jsx/index',
    output: {
      path: __dirname + '/dist/js/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [ 'env', 'flow', 'react', 'stage-2' ],
          },
        },
      ],
    },
    plugins: [ new FlowWebpackPlugin() ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3000,
    },
    devtool: 'cheap-module-eval-sourcemap',
    resolve: {
      extensions: [ '.js', '.jsx' ]
    },
  },
];


