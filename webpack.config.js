const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const SOURCE_DIR = path.resolve(__dirname, 'client');
const OUTPUT_DIR = path.resolve(__dirname, 'build');

var config = {
    mode: IS_DEVELOPMENT ? 'development' : 'production',
    context: SOURCE_DIR,
    entry: {
        app: '.'
    },
    output: {
        path: OUTPUT_DIR,
        filename: IS_DEVELOPMENT ? '[name].js' : '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: IS_DEVELOPMENT ? false : {
                                        discardComments: {
                                            removeAll: true
                                        }
                                    },
                                    importLoaders: 1
                                }
                            },
                            'postcss-loader'
                        ]
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ['url-loader', 'svg-fill-loader']
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        // extract CSS to a standalone file; cut the [contenthash] to the first
        // 20 chars to maintain parity with the length of [chunkhash]
        new MiniCssExtractPlugin({
            filename: IS_DEVELOPMENT ? '[name].css' : '[name].[contenthash:20].css',
        }),

        //
        new HtmlWebpackPlugin({ template: 'index.html' })
    ],
    resolve: {
        alias: {
            api$: path.resolve(SOURCE_DIR, 'api/index.js'),
            assets: path.resolve(SOURCE_DIR, 'assets'),
            components: path.resolve(SOURCE_DIR, 'components')
        }
    }
};

if (!IS_DEVELOPMENT) {
    config.plugins.push(new CompressionPlugin());
}

module.exports = config;
