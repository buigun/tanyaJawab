const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

io.on('connection',function(socket){
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(port, () => console.log(`Listening on port ${port}!`));