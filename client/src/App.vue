<template>
  <div id="app">
    <img style="width:400px;" alt="Vue logo" src="./assets/logo.png">
    <Welcome v-if="screen === 'welcome'" @registerSubmit="registerSubmit"></Welcome>
    <Questions :data="question" v-if="screen === 'questions'" @getScore="getScore"></Questions>
    <Scores v-if="screen === 'scores'"></Scores>
    <footer>
      <p class="text-center">Created by Buigun, Jes, Anandapuja</p>
    </footer>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'
import Scores from './components/Scores.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  data(){
    return {
      screen: 'welcome'
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
    registerSubmit: function(){
      this.screen = 'questions'
    },
    getScore() {
      this.screen = 'scores'
      console.log('lebih')
    }
  }
  ,
  created() {
    this.$store.dispatch("getQuestion");
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
</style>
