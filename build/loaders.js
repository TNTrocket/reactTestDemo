let path = require('path')
let autoprefixer = require("autoprefixer");
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let mode = process.env.NODE_ENV;
let lessLoader = '';

if (mode === 'production') {
    lessLoader = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [ {
            loader: 'css-loader'
        },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ]
                    }
                }
            },{
                loader: 'less-loader'
            }]
    })
} else {
    lessLoader = 'style-loader!css-loader!postcss-loader!less-loader';
}

module.exports =[{
  test: /\.(less|css)$/,
  exclude: /^node_modules$/,
  use: lessLoader
}, {
    test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
    exclude: /^node_modules$/,
    loader: 'file-loader?name=[name].[ext]'
}, {
    test: /\.(png|jpg|gif)$/,
    exclude: /^node_modules$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: "images/[hash:8].[name].[ext]"
    }
    //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
}, {
    test: /\.(jsx|js)$/,
    exclude: /^node_modules$/,
    include: path.resolve(__dirname, '../src'),
    loader: ['react-hot-loader', 'jsx-loader', 'babel-loader']
}
]