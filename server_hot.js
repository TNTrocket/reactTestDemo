let webpack = require('webpack');
let express = require('express');
let path = require('path');
let config = require('./build/webpack.config.hot');
let devMiddleware = require('webpack-dev-middleware');
let hotMiddleware = require('webpack-hot-middleware');



let app = express();
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

app.get('*', function(req, res) {
	let result = '';
  try {
    result = devMiddle.fileSystem.readFileSync(path.join(__dirname +'/build/index.html'))
  } catch (err) {
    result = err.toString();
  }
  res.set('Content-Type', 'text/html');
  res.send(result);
});
app.listen(8088, function() {
	console.log('正常打开8088端口')
});
