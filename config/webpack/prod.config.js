import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import babelConfig from './babelLoaderConfig';

module.exports = {
    cache: true,
    target: 'web',
    profile: false,
    mode: 'production',
    devtool: 'none',
    entry: {
        index: ['./website/client/index.tsx'],
    },
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve('./dist'),
        chunkFilename: '[name].[chunkhash].js',
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
                            server: true,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: '[hash:base64:8]',
                            sourceMap: false,
                            minify: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },
    optimization: {
        occurrenceOrder: true,
        minimizer: [new TerserPlugin()],
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -20,
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        modules: ['node_modules', 'src'],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './website/assets/prod.html',
            inject: 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
        new ManifestPlugin({
            fileName: 'assets-manifest.json',
            writeToFileEmit: true,
        }),
        new webpack.HashedModuleIdsPlugin(), // в результате хэши не будут неожиданно менят
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
        new webpack.SourceMapDevToolPlugin({
            columns: false,
            filename: '[file].map',
            // @ts-ignore
            publicPath: 'http://localhost/',
            append: false,
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.js(\?.*)?$/i,
            compressionOptions: { level: 9, numiterations: 15 },
            algorithm: 'gzip',
            threshold: 1024,
            minRatio: 0.8,
        }),
    ],
};
