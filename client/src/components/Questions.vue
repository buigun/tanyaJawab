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
        this.index += 1

        if (this.data[this.index-1].answer == true) {
          this.score += 1
        } else {
          this.score += 0
        }

        console.log(this.score)
      } else {
        this.$emit('getScore')
      }
    },
    addIndexNo(){
      if (this.index < this.data.length-1) {
        this.index += 1

        if (this.data[this.index-1].answer == false) {
          this.score += 1
        } else {
          this.score += 0
        }

        console.log(this.score)
      } else {
        this.$emit('getScore')
      }
    },
  },
}
</script>