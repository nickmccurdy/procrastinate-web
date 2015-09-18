var logger = require('koa-logger');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(logger());
app.use(serve('public'));
app.listen(3000);
