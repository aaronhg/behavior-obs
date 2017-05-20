var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry : APP_PATH,
    output:{
        path : BUILD_PATH,
        filename : 'bundle.js',
    },
    plugins:[
        new HtmlwebpackPlugin({
        title: 'Hello World app'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                exclude: /node_modules/,
                query: {
                    plugins: ["transform-decorators-legacy"],
                    presets: ['react','es2015'],
                }
            },
        ]
    }
}