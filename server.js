let express = require('express');
let path = require('path');
let app = express();

app.use(express.static('./dist'));

app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname,'/dist/index.html'));
});
app.listen(8080, function() {
  console.log('正常打开8080端口')
});
