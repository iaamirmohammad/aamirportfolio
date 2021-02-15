// server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/css'));
app.use("/javascript", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080);