var jsonServer = require('json-server');
var server = jsonServer.create();
var db = {
  "users": [],
  "hobbies": []
}

var router = jsonServer.router(db);
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);
server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log('JSON Server is running')
});
