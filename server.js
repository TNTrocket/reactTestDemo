let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use(express.static('./dist'));
app.use(express.static('./plugin'));

app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname,'/dist/index.html'));
});
app.listen(8088, function() {
  console.log('正常打开8088端口')
});
