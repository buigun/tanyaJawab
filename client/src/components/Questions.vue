<template>
  <div class="my-container" v-if="index < data.length">
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
    addIndexYes(){
      if (this.index < this.data.length-1) {
        this.checkAnswerTrue()
        this.index += 1
      } else {
        this.checkAnswerTrue()
        this.$emit('getScore',this.score)
      }
    },
    addIndexNo(){
      if (this.index < this.data.length-1) {
        this.checkAnswerFalse()
        this.index += 1
      } else {
        this.checkAnswerFalse()
        this.$emit('getScore',this.score)
      }
    },
    checkAnswerFalse(){
        if (this.data[this.index].answer == false) {
          this.score += 1
        } else {
          this.score += 0
        }
    },
    checkAnswerTrue(){
        if (this.data[this.index].answer == true) {
          this.score += 1
        } else {
          this.score += 0
        }
    }
  },
}
</script>