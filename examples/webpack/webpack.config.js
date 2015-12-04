var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './static/bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
             }
          }
        ]
    },
    externals: {
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ]
}
