var express = require("express");
var app = express();
var marked = require("marked");
var fs = require("fs");
var path = require("path");
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
app.use(express.static("public", { maxAge: 12 * 60 * 60 * 24 * 30 }));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
var formate = require("./dateformate.js"); //格式化日期
var pathPublic = path.join(__dirname, '/public/blog/posts');

/********************获取文章列表********************************/
app.get("/api/blog/posts", function (req, res) {
  var posts = [];
  fs.readdir(pathPublic, function (err, files) {

    if (err) {
      console.error(err);
    }
    console.log(files, "files");
    for (var i = 0; i < files.length; i++) {
      posts.push({
        title: path.basename(files[i], ".md"),
        datetime: fs.statSync(`${pathPublic}/${files[i]}`).mtime
      });
    }
    posts.sort(function (a, b) {
      return b.datetime - a.datetime;
    });
    for (var j = 0; j < posts.length; j++) {
      posts[j].datetime = formate(posts[j].datetime);
    }
    res.send(posts);
  });
});
/********************获取文章列表********************************/
/********************获取文章详情********************************/
app.get("/api/blog/post/detail", function (req, res) {
  var post = { Mtime: "", content: "" };
  console.log(req.query.file);
  fs.readFile(`${pathPublic}/${req.query.file}`, "utf-8", function (
    err,
    data
  ) {
    if (err) throw err;
    post.content = marked(data);
    fs.stat(`${pathPublic}/${req.query.file}`, function (err, stats) {
      if (err) throw err;
      post.Mtime = formate(stats.mtime);
      res.send(post);
    });
  });
});
/********************获取文章详情********************************/
app.get("/", function (req, res) {
  res.sendFile("/blog/index.html", { root: __dirname + "/public/" });
});
app.listen(80);
console.log("server is running at port 80");
