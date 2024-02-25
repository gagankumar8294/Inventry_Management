const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send("welcome to Inventory App");
})

server.listen(3400);