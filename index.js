const express = require('express')


const app = express()
let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Your App is running at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
res.send('Hello World!');
});