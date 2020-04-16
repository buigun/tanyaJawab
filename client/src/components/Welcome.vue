<template>
  <div class="my-container">
    <div class="title-question">
      <h1>Welcome</h1>
    </div>
    <div class="the-question mt-3">
      <h3>Type your name to start the game ...</h3>
    </div>
    <div class="welcome mt-3">
      <form @submit.prevent="registerSubmit">
        <input type="text" placeholder="Your name here ..." required>
        <button class="btn btn-success percent-50 mt-3">JOIN GAME!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data(){
    return {

    }
  },
  methods: {
    registerSubmit: function(){
      this.$emit('registerSubmit')
    }
  }
}
</script>