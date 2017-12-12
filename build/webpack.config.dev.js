let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let loaders = require("./loaders");


//定义地址
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, '../src'); //__dirname 中的src目录，以此类推
let APP_FILE = path.resolve(APP_PATH, 'app.jsx'); //根目录文件app.jsx地址
console.log("process",process.env.NODE_ENV);
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            APP_FILE
        ]
    },
    output: {
        publicPath : '/',
        path: ROOT_PATH,
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        rules: loaders
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : APP_PATH + '/index.html',
            minify: false,
            inject: 'body'
          }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.less','.css']
    }
  // devServer : {
  //   historyApiFallback: {
  //     disableDotRule: true
  //   }
  // }
};
