let path = require('path')
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let StringReplacePlugin = require("string-replace-webpack-plugin")
let moment = require('moment')

let mode = process.env.NODE_ENV
let lessLoader
let jsLoader

if (mode === 'production') {
  lessLoader = ExtractTextPlugin.extract('style', ['css', 'autoprefixer','less'])
  jsLoader = ['jsx-loader', 'babel-loader']
} else {
  lessLoader = 'style-loader!css-loader!less-loader';
  jsLoader = ['react-hot-loader','jsx-loader', 'babel-loader']
}

module.exports =[{
  test: /\.(less|css)$/,
  exclude: /^node_modules$/,
  loader: lessLoader
}, {
  test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
  exclude: /^node_modules$/,
  loader: 'file-loader?name=[name].[ext]'
}, {
  test: /\.(png|jpg|gif)$/,
  exclude: /^node_modules$/,
  loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
  //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
}, {
  test: /\.jsx$/,
  exclude: /^node_modu`les$/,
  include: path.resolve(__dirname, '../src'),
  loaders: ['react-hot-loader','jsx-loader', 'babel-loader']
},{
  test: /\.js$/,
  exclude: /^node_modules$/,
  include: path.resolve(__dirname, '../src'),
  loaders: ['react-hot-loader', 'babel-loader']
}
]