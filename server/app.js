const express = require("express");
const app = express();
const {Question} = require('./models') 
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const port = 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/questions', (req, res) => {
    Question.findAll({
        order: [['id','ASC']]
    })
    .then(products=>{
        res.status(200).json({
            message: 'Get product list success',
            products
        })
    })
    .catch(err=>{
        res.status(500).json(err)
    })
});

io.on('connection',function(socket){
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(port, () => console.log(`Listening on port ${port}!`));