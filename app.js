var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(5000, function(){
    console.log('server running');
});