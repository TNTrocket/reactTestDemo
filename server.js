let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let app = express();


let ueditor = require("ueditor")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use(express.static('./dist'));
// 支持七牛上传，如有需要请配置好qn参数，如果没有qn参数则存储在本地
app.use("/ueditor/ue", ueditor(path.join(__dirname, ''), {
  // qn: {
  //
  // }
}, function(req, res, next) {
  // ueditor 客户发起上传图片请求
  let imgDir = '/dist/img/'
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
app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname,'/dist/index.html'));
});
app.listen(8088, function() {
  console.log('正常打开8080端口')
});
