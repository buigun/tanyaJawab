<template>
  <div class="my-container">
    <div class="title-question">
      <img class="mb-4" style="width:100px" src="../assets/piala.png">
      <h1>Your score: {{skor}}</h1>
    </div>
    <div>
      <h4>Congratulations to the winner, see you next time ...</h4>
    </div>
    <div class="space-around mt-3 mb-4">
        <div class="score-round"><p>1</p></div>
        <div class="score-round"><p>2</p></div>
        <div class="score-round"><p>3</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  data(){
    return {

    }
  },
  props: ['skor']
}
</script>