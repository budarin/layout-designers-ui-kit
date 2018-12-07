const path = require('path');

const config = {
    plugins: [
        // @ts-ignore
        require('postcss-mixins')({
            mixinsDir: path.resolve('config/postCSS/mixins'),
        }),
        // @ts-ignore
        require('postcss-preset-env')({
            stage: 3,
            features: {
                'nesting-rules': true,
            },
            autoprefixer: {
                grid: true,
            },
        }),
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        require('cssnano')({
            preset: [
                'default',
                {
                    normalizeUrl: false, //do not modify urls & not breaks file-loader
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
    );
}

module.exports = config;
