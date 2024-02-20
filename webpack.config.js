const path = require('path');

module.exports = {
    mode : 'development',
    entry: {
  
        bundle: path.resolve(__dirname, 'src/index.ts'),
    },
   
    // module: {
    //     rules: [
    //         {
    //             test: /\.tsx?$/,
    //             use: 'ts-loader',
    //             exclude: /node_modules/,
    //         },
        // ],
    // },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
}   