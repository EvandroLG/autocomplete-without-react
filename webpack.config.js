const currentDir = process.cwd();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: currentDir
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: currentDir
  }
};
