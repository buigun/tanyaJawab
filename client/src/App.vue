<template>
  <div id="app">
    <div class="container-start">
    <table class="table">
      <tr v-for="(player,index) in $store.state.players" :key="index">
        <td>{{player.name}}</td>
        <td>{{player.score}}</td>
      </tr>
    </table>
    </div>
    <img style="width:400px;" alt="Vue logo" src="./assets/logo.png">
    <Welcome v-if="screen === 'welcome'" @registerSubmit="registerSubmit"></Welcome>
    <Questions @gameStatus="gameStatus" @stopGame="stopGame" @updateScore="updateScore" :data="question" v-if="screen === 'questions'" @getScore="getScore"></Questions>
    <Scores :skor="score" v-if="screen === 'scores'" @rematch="rematch" @reset="reset"></Scores>
    <footer>
      <p class="text-center">Created by Buigun, Jes, Anandapuja</p>
    </footer>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'
import Scores from './components/Scores.vue'
import Welcome from './components/Welcome.vue'
import io from 'socket.io-client'
const socket = io.connect('https://limitless-retreat-68299.herokuapp.com');
// http://localhost:3000

export default {
  name: 'App',
  data(){
    return {
      screen: 'welcome',
      score: 0,
      player: '',
      players: []
    }
  },
  computed: {
    question() {
      return this.$store.state.question
    }
  },
  components: {
    Questions,
    Scores,
    Welcome
  },
  methods: {
    updateScore(score){
      socket.emit('updateScore', {name: localStorage.getItem('player'), score: score})
      console.log(score)
    },
    registerSubmit: function(player){
      this.screen = 'questions'
        socket.emit('playerName', { player: player });
        console.log(player)
        localStorage.setItem('player',player)
    },
    gameStatus(){
      socket.emit('statusGame',true);
    },
    getScore(score) {
      this.score = score
      socket.emit('end', 'scores')
    },
    rematch(){
      this.screen = 'questions'
      socket.emit('rematch')
    },
    stopGame(){
      socket.emit('statusGame',false)
    },
    reset(){
      localStorage.clear()
      socket.emit('reset')
    }
  }
  ,
  created() {
    this.$store.dispatch("getQuestion")

    if (localStorage.getItem('player')) {
      this.screen = 'questions'
      socket.emit('ambilData')
    }

    socket.on('players',(data)=>{
      this.players.push(data)
      console.log(data)
      this.$store.commit('SET_PLAYERS',data)
    })

    socket.on('statusGame',(data)=>{
      this.$store.commit('SET_STATUS',data)
      console.log(data)
    })

    socket.on('screenEnd',(data)=>{
      console.log(data)
      this.screen = data
    })

    socket.on('reset',(data)=>{
      this.screen = data
      localStorage.clear()
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  width: 100%;
  text-align: center;
  padding: 15px;
  font-size: 22px;
  background-color: #aaa;
  border: none;
  border-radius: 10px;
  color: white;
}
body {
  background: #ddd;
}
.my-container {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 0 0 30px 30px;
}
.choose-one {
  display: flex;
  justify-content: center;
}
.percent-50 {
  width: 50%;
}
.score-round {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
  align-items: center;
}
.space-around{
  display: flex;
  justify-content: space-around;
}
.space-around p {
  padding: 25px;
  font-size: 30px;
}
.welcome {
  display: flex;
  flex-direction: column;
}
.container-start {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  padding: 20px;
  border-radius: 0 0 30px 30px;
}
</style>
