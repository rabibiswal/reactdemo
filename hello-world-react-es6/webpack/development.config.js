var webpack = require('webpack')
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {

    devtool : 'eval',

    entry : {
        app : ['./client']
    },

    output : {
        filename : '[name]-bundle.js',
        path : './dist'
    },

    resolve : {
        extensions : ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories : ['client', 'node_modules']
    },

    module : {

        loaders : [
            {
                test : /\.jsx?$/,
                loader : 'babel',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]

    },

    plugins : [
         new WebpackNotifierPlugin({ alwaysNotify: true }),
    ],
    watch : true
}