"use strict";

const express = require('express');
const server = express();

server.use(express.static(__dirname));

server.listen('3001', function(){
    console.log('http://localhost:3001');
})