<template>
  <div class="my-container">
    <div class="title-question">
      <h1>Your score: {{skor}}</h1>
    </div>
    <div>
      <h4>Congratulations to the winner, see you next time ...</h4>
    </div>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
      <tr v-for="(player,index) in highScore" :key="index">
        <td>{{player.name}}</td>
        <td>{{player.score}}</td>
      </tr>
    </table>
    <button class="btn btn-success percent-50" style="margin: 0 auto" @click="rematch">Rematch</button>
    <button class="btn btn-danger percent-50" style="margin: 0 auto" @click="reset">Reset</button>
    <audio autoplay id="playAudio">
      <source src="../assets/yeay.mp3">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  data(){
    return {
      players: this.$store.state.players
    }
  },
  props: ['skor'],
  methods: {
    rematch() {
      this.$emit('rematch')
    },
    reset() {
      this.$emit('reset')
    }
  },
  computed: {
    highScore() {
      let var1 = this.players 

      for (let i = 1; i < var1.length; i++) {
        for (let j = 0; j < i; j++) {

          if (var1[j].score < var1[i].score) {
            let temp = var1[j]
            var1[j] = var1[i]
            var1[i] = temp
          }
        }
      }

      return var1
    }
  },
}
</script>