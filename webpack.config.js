var path = require('path');
var config = {
  entry: './src/index.tsx',

  output: {
    path: '/',
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true
  },
  
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
        ]
      }
    ]
  }
}

module.exports = config;
