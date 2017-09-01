let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
let loader = require("./loaders");


//定义地址
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, '../src'); //__dirname 中的src目录，以此类推
let APP_FILE = path.resolve(APP_PATH, 'app.jsx'); //根目录文件app.jsx地址

console.log("ROOT_PATH===",ROOT_PATH);
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            APP_FILE
        ]
    },
    output: {
        publicPath : '/', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: ROOT_PATH, //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        loaders: loader
    },
    plugins: [
        new webpack.DefinePlugin({
            //process.argv：当前进程的命令行参数数组。
            //process.env：指向当前shell的环境变量，比如process.env.HOME。
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({
            template : APP_PATH + '/index.html',
            minify: false,
            inject: 'body'
          }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
  // devServer : {
  //   historyApiFallback: {
  //     disableDotRule: true
  //   }
  // }
};
