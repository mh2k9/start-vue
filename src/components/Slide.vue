<template>
  <div class="slide">
    <p class="name">{{ getDescription(details[topic]) }}</p>
    <div class="list">
      <ul>
        <li v-for="(item, key) in getList(details[topic])" :key="key" v-html="item"></li>
      </ul>
    </div>
    <img v-if="(typeof details[topic] !== 'undefined' && typeof details[topic].img !== 'undefined')" :src="getImgUrl(details[topic])"/>
  </div>
</template>

<script>
import details from '../assets/data/data.json'
export default {
  name: 'Slide',
  props: ['topic'],
  data () {
    return {
      details: {}
    }
  },
  mounted () {
    const self = this
    self.$nextTick(() => {
      this.details = details
    })
  },
  methods: {
    getImgUrl: (prop) => {
      let img = (typeof prop !== 'undefined' && typeof prop.img !== 'undefined') ? prop.img : 'logo.png'
      return require('../assets/' + img)
    },
    getDescription: (prop) => {
      return prop && typeof prop.description !== 'undefined' ? prop.description : ''
    },
    getList: (prop) => {
      return prop && typeof prop.list !== 'undefined' ? prop.list : []
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
  font-size: 30px;
  color: #fff;
  line-height: 1.42857143;
  font-weight: bold;
}

ul li {
  font-size: 40px;
  color: #FF5;
  width: 50%;
  text-align: left;
  margin: 0 auto;
  font-weight: bold;
}
/*img {
  border: 1px solid #fff;
}*/
</style>
