<template>
  <div class="home">
    <!--<img src="../assets/logo.png" height="200" width="200"/>-->
    <img v-show="details.photo" src="../assets/photo.png" height="200" width="200"/>
    <img v-show="details.evan" src="../assets/evan.jpeg" height="200" width="200"/>
    <div class="name">{{ details.name }}</div>
    <div class="prop">{{ details.des }}</div>
    <div class="prop" v-html="details.org"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  props: ['details']
}
</script>

<style scoped>
  .name {
    font-size: 60px;
    color: white;
  }
  .prop {
    font-size: 40px;
    margin: 15px;
    color: white;
  }
  img {
    border-radius: 50%;
  }
</style>
