"use strict";

const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.use(express.static(__dirname));

server.use(function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen('3001', function(){
    console.log('http://localhost:3001');
})