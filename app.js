var express = require("express");
var swig = require('swig');
var routes = require('./routes/');
var socketio = require('socket.io');

var app = express();
app.listen(3000);
var io = socketio.listen(server);

swig.setDefaults({cache: false});
app.set("views", __dirname+"/views");
app.set("view engine", "html");
app.engine('html', swig.renderFile);

console.log("server listening");

app.use("/", function (req, res, next) {
  console.log(req.method + ": " + req.path);
  next();
});

app.use('/', routes(io));
