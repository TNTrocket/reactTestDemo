let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let loaders = require("./loaders");

//定义地址
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, '../src');
let APP_FILE = path.resolve(APP_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, '../dist');


module.exports = {
    entry: {
        app: APP_FILE,
        common: [
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        rules : loaders
    },
    plugins: [
        new HtmlWebpackPlugin({
          template : APP_PATH + '/index.html',
          minify: false,
          inject: 'body'
          }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true
        }),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        extensions: [ '.js', '.jsx', '.less', '.css']
    }

};