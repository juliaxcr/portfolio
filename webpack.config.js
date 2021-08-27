// const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  // mode: isDev ? 'development' : 'production',
  // mode: 'development',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/App.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.(svg|eot|woff|woff2|ttf)$/,
      //   use: ['file-loader']
      // }
    ],
  },
}
