import hoAmI from "./hoAmI";

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const data = hoAmI();
    res.send('Hello World');
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Listening at http://%s:%s", host, port)
});
