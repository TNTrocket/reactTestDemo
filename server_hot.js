let webpack = require('webpack');
let express = require('express');
let path = require('path');
let config = require('./build/webpack.config.hot');
let devMiddleware = require('webpack-dev-middleware');
let hotMiddleware = require('webpack-hot-middleware');
let bodyParser = require('body-parser')
let app = express();


let ueditor = require("ueditor")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
let compiler = webpack(config);
let devMiddle = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  progress: true,
  stats: {
    colors: true
  }
});

app.use(devMiddle);

app.use(hotMiddleware(compiler));


if (module.hot) {
  module.hot.accept();
}
app.use(express.static('./plugin'));
// 支持七牛上传，如有需要请配置好qn参数，如果没有qn参数则存储在本地
app.use("/ueditor/ue", ueditor(path.join(__dirname, ''), {

}, function(req, res, next) {
  // ueditor 客户发起上传图片请求
  let imgDir = '/plugin/img/'
  if(req.query.action === 'uploadimage'){
    let foo = req.ueditor;

    let imgname = req.ueditor.filename;


    res.ue_up(imgDir); //你只要输入要保存的地址 。保存操作交给ueditor来做
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage'){

    res.ue_list(imgDir);  // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {

    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/php/config.json')
  }}));
app.get("*", function (req, res) {
  let result = '';
  try {
    result = devMiddle.fileSystem.readFileSync(path.join(__dirname + '/build/index.html'))
  } catch (err) {
    result = err.toString();
  }
  res.set('Content-Type', 'text/html');
  res.send(result);
});
app.listen(8088, function () {
  console.log('正常打开8088端口')
});
