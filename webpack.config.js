// connect to the path module
const path = require('path');
// const { webpack } = require('webpack');
const webpack = require('webpack');
// connect to the bundle analyzer plugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// create the main configuration object within the file
// we'll write options within this object that tell webpack what to do
// basic configuration includes three webpack properties: entry, output, and mode
module.exports = {
    // first thing we want to declare is entry
    // the entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry: { //entries for all the pages
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    // webpack will then take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify.
    output: {
        // the name of each attribute in the entry object will be used in place of [name] in each bundle.js file that is created
        // they will be written in the /dist folder
        filename: '[name].bundle.js',
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            { 
                // this object will identify the type of files to pre process using the 
                // test property to find a regular expression, or regex.
                test: /\.jpg$/i,
                use: [ // where the loader is implemented
                    {
                        loader: 'file-loader',
                        options: {
                            name (file) {
                                // returns the name of the file with the file extension
                                return '[path][name].[ext]'
                            },
                            // changes our assignment url by replacing the ../ from our require() with /assets/
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    // add a plugin to tell webpack to use the jquery package
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
    ],
    // provide the mode in which we want webpack to run
    // by default webpack wants to run in 'production' mode - webpack will minify our code for us automatically, along with other additions
    mode: 'development'
};