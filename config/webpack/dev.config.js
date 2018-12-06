import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import babelConfig from './babelLoaderConfig';

module.exports = {
    cache: true,
    target: 'web',
    profile: false,
    mode: 'development',
    devtool: 'eval',
    entry: {
        index: ['./website/client/index.tsx'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve('./dist'),
        chunkFilename: '[name].[chunkhash].js',
        hotUpdateChunkFilename: '[id].[hash].hot-update.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                include: [path.resolve('./components'), path.resolve('./website')],
                exclude: path.resolve('node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: babelConfig,
                },
            },
            {
                test: /\.(eot|otf|woff|woff2|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader/useable',
                        options: {
                            hmr: true,
                        },
                    },
                    {
                        loader: '@budarin/ts-css-loader',
                        options: {
                            modules: true,
                            browser: true,
                            server: false,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: '[name].[local]_[hash:7]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        modules: ['node_modules', 'src'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ManifestPlugin({
            fileName: 'assets-manifest.json',
            writeToFileEmit: true,
        }),
        new HtmlWebpackPlugin({
            template: './website/assets/dev.html',
            inject: 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]), // due to slow building ignore changes
    ],
    devServer: {
        port: 3000,
        host: 'localhost',
        hot: true,
        inline: true,
        overlay: true,
        compress: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
