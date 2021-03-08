// connect to the path module
const path = require('path');
// const { webpack } = require('webpack');
const webpack = require('webpack');


// create the main configuration object within the file
// we'll write options within this object that tell webpack what to do
// basic configuration includes three webpack properties: entry, output, and mode
module.exports = {
    // first thing we want to declare is entry
    // the entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry: './assets/js/script.js',
    // webpack will then take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // add a plugin to tell webpack to use the jquery package
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // provide the mode in which we want webpack to run
    // by default webpack wants to run in 'production' mode - webpack will minify our code for us automatically, along with other additions
    mode: 'development'
};