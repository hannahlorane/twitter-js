var express = require("express");
var app = express();

console.log("server listening");

app.listen(3000);

app.all("*", function (req, res, next) {
  console.log(req.method + ": " + req.path);
  next();
});

app.get("/unreal", function (req, res, next) {
  console.log("This is what a feminist looks like");
  next();
});

app.get("/news", function (req, res) {
  res.send("we create magic filepaths that are not filepaths!!!");
});


app.get("/*", function (req, res) {
  res.send("You are on a thing! good job!");
});
