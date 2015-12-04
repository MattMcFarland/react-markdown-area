var webpack = require('webpack');

module.exports = {
    entry: './src/markedarea.js',
      output: {
        filename: 'lib/markedarea.js',
        library: 'MarkedArea',
        libraryTarget: 'umd'
      },
    module: {
        loaders: [
          { test: /\.js$/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
             }
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          }
        ]
    },
      externals: [
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          }
        }
      ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
    new webpack.optimize.DedupePlugin()
    ]
}
