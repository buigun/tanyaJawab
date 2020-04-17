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
    .then(questions=>{
        res.status(200).json({
            message: 'Get questions list success',
            questions
        })
    })
    .catch(err=>{
        res.status(500).json(err)
    })
});

let status = false
let users = [] //{name:,score:}

io.on('connection', function (socket) {
    console.log('user connected')
    socket.emit('news', { hello: 'world' });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('playerName', function (data) {
      let user = {
          name: data.player,
          score: 0
      }
      users.push(user)

      io.emit('players',users)
    });

    socket.on('statusGame', function (data) {
        status = data
        console.log('listen')
        io.emit('statusGame',data)
    })

    socket.on('ambilData', function (data) {
        io.emit('players',users)
    })

    socket.on('updateScore', function (data) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == data.name) {
                users[i].score = data.score 
            }
        }
        console.log(data)
        io.emit('players',users)
    })

    socket.on('end', function(data){
        console.log(data)
        io.emit('screenEnd',data)
    })

    socket.on('rematch', function(){
        for (let i = 0; i < users.length; i++) {
            users[i].score = 0
        }
        io.emit('players',users)
        io.emit('screenEnd','questions')
    })
  });

http.listen(port, () => console.log(`Listening on port ${port}!`));