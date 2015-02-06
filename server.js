var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

var db = {
  posts: [
    {title: 'Post # 1', body: 'Hello! This is my first post!', date: '2015-02-06T15:28:15.471Z'},
    {title: 'Second Post', body: 'Cool! The second post there!', date: '2015-02-06T19:45:48.377Z'}
  ]
}

app.get('/posts', function (req, res) {
  res.send(db.posts)
})

app.post('/posts', function (req, res) {
  var post = req.body;
  db.posts.push(post)
  res.send(post)
})

app.listen(PORT)

console.log("Listening " + PORT + ". Visit: localhost:3000.")

