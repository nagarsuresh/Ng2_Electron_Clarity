const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'source-map',
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/app/app'
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('app/index.html')]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=dist/[name]-[hash].[ext]'
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'], minChunks: Infinity }),
        new CopyWebpackPlugin(
            [
                { from: 'src/assets', to: 'assets' },
                { from: 'src/electronApp/main.js', to: 'main.js' },
                { from: 'src/electronApp/native/*.js', to: 'native/[name].js' },
                { from: 'src/electronApp/package.json', to: 'package.json' },
                { from: 'src/data', to: 'data' }
            ]
        ),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false,
                    resourcePath: 'src'
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles_bundle.css',
            allChunks: true
         })
    ],
    node: {
        global: true,
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};

/**
 * Target Electron
 */
config.target = 'electron-renderer';
module.exports = config;
