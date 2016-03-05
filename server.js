var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var instaGAPI = require('instagram-node').instagram();



app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist/css/"));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery/dist/"));
app.use('/scrollMagic', express.static(__dirname + "/node_modules/scrollmagic/scrollmagic/"));
app.use('/instaFeed', express.static(__dirname + "/node_modules/instaFeed.js/"));
app.use('/masonry', express.static(__dirname + "/node_modules/masonry-layout/dist/"));


app.get('/', function(request, response, next){
  response.sendFile('app');
});


http.listen(port);
