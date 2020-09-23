const path = require('path'); // to get absolute paths

module.exports = {
  devtool: 'eval-source-map', // helps source map; eval quicker, use 'source-map' in production
  mode: 'development', // change to production when finished
  entry: './src/index.ts', // entry file, though all in the directory is beeing bundled
  module: {
    rules: [ // rule: take a .ts file and make .js file
      {
        test: /\.ts$/, // $ means only file endings (if condition)
        include: [path.resolve(__dirname, 'src')], // where the TS files are
        use: 'ts-loader', // (what to do)
      }
    ]
  },
  // resolve modules via extension
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js', // bundled output file
    path: path.resolve(__dirname, 'public'), // needs to be an absolute path -> const path = require('path') handles this
  }, 
};