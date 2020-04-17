<template>
  <div>
    <button class="btn btn-success" @click="start">Start</button>
    <button class="btn btn-success" @click="stop">Stop</button>
  <div class="my-container" v-if="index < data.length && $store.state.status">
    <div class="title-question">
      <h1>Answer this questions please</h1>
    </div>
    <div class="the-question mt-5">
      <h3>{{data[index].question}}</h3>
    </div>
    <div class="choose-one mt-5">
      <button class="btn btn-success percent-50" @click="addIndexYes">YES</button>
      <button class="btn btn-danger percent-50" @click="addIndexNo">NO</button>
    </div>
  </div>
  </div>  
</template>

<script>
export default {
  name: 'Questions',
  data(){
    return {
      index: 0,
      score: 0
    }
  },
  props: ['data'],
  methods: {
    start(){
      this.$emit('gameStatus');
    },
    stop(){
      this.$emit('stopGame');
    },
    addIndexYes(){
      if (this.index < this.data.length-1) {
        this.checkAnswer(true)
        this.index += 1
      } else {
        this.checkAnswer(true)
        this.$emit('getScore',this.score)
      }
    },
    addIndexNo(){
      if (this.index < this.data.length-1) {
        this.checkAnswer(false)
        this.index += 1
      } else {
        this.checkAnswer(false)
        this.$emit('getScore',this.score)
      }
    },
    checkAnswer(value){
        if (this.data[this.index].answer == value) {
          this.score += 1
          this.$emit('updateScore', this.score);
        } 
    }
    // checkAnswerTrue(){
    //     if (this.data[this.index].answer == true) {
    //       this.score += 1
    //     }
    // }
  },
}
</script>