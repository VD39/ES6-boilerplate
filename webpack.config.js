const path = require('path');

const config = {
  entry: path.join(__dirname, '/app/index'),
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1000000'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [],
  watch: false
};

module.exports = config;
