'use strict';

var express = require('express');
var app = express();
var path = require('path');

var clientPath = path.join(__dirname + '/');
app.use(express.static(clientPath));

var server = app.listen(process.env.PORT || 8080, ()=>{
    var port = server.address().port;
    console.log('App now running on port,', port);
});



//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}
