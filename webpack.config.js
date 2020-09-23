const path = require('path') // to get absolute paths

module.export = {
  entry: './src/index.ts', // entry file, though all in the directory is beeing bundled
  module: {
    rules: [ // rule: take a .ts file and make .js file
      {
        test: /\.ts$/, // $ means only file endings (if condition)
        use: 'ts-loader', // (what to do)
        include: [path.resolve(__dirname, 'src')] // where the TS files are
      }
    ]
  },
  output: {
    filename: 'bundle.js', // bunded output file
    path: path.resolve(__dirname, 'public') // needs to be an absolute path -> const path = require('path') handles this
  },
}