var express = require("express");
var swig = require('swig');

var app = express();
app.listen(3000);

swig.setDefaults({cache: false});
app.engine('html', swig.renderFile);
app.set("views", "/views");
app.set("view engine", "html");

console.log("server listening");

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
  res.render("index",  {
    title : "This is our awesome app",
    people: [{name: "Horkheimer"}, {name: "Adorno: Jazz-Hater"}, {name: "Benjamin the Magickal"}],
  });
});
