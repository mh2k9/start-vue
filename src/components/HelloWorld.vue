<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ topic }}</h2>
    <h2>{{ details }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my first Vue.js App',
      details: {}
    }
  },
  props: ['topic'],
  mounted () {
    const self = this
    self.$nextTick(() => {
      self.details = self.topic
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
