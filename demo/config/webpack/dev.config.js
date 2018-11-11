const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//@ts-ignore
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    cache: true,
    target: 'web',
    profile: false,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: ['./demo/client/index.tsx'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './demo/assets/dev.html',
            inject: 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
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
