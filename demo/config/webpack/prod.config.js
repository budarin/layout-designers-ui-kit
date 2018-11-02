const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//@ts-ignore
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    cache: true,
    target: 'web',
    profile: false,
    mode: 'production',
    devtool: 'none',
    entry: {
        index: ['./demo/client/index.tsx'],
    },
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', 'src'],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/assets/prod.html',
            inject: 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
    ],
};
