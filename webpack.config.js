module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    proxy: {
      "/recipe-puppy-api": {
        target: 'http://www.recipepuppy.com',
        pathRewrite: { '^/recipe-puppy-api': '/api' },
        changeOrigin: true,
        secure: false
      }
    },
    historyApiFallback: true,
    contentBase: './',
    port: 8008,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
