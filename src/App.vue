<template>
  <div class="container">
    <div class="header">
      <div class="previous" @click="changeTopic('prev')" v-show="!(topic_item === topics[0])">
        &#x3c; Previous
      </div>
      <div class="middle">
        <h1>{{ title }}</h1>
      </div>
      <div class="next" @click="changeTopic('next')" v-show="!(topic_item === topics[topics.length - 1])">
        Next &#x3e;
      </div>
      <div class="clear"></div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
  <!--<div id="app2">
    <a href="/"><img src="./assets/logo.png"></a>
    <router-view/>
  </div>-->
</template>

<script>
export default {
  methods: {
    changeTopic: function (dir) {
      let index = this.topics.indexOf(this.topic_item)
      let lengthList = this.topics.length - 1
      let newTopic = this.topics[0]
      if (dir === 'prev' && index > 1) {
        newTopic = this.topics[index - 1]
      } else if (dir === 'next' && index < lengthList) {
        newTopic = this.topics[index + 1]
      }
      // this.pivot = newTopic
      this.topic_item = newTopic
      this.title = newTopic === this.topics[0] ? 'The point of VueJS' : newTopic
      this.router.push({path: newTopic.toLowerCase().replace(/\s/g, '-')})
    }
  },
  name: 'App',
  data () {
    return {
      title: 'The point of VueJS',
      topic_item: null
    }
  },
  props: ['topics', 'pivot', 'router'],
  mounted () {
    const self = this
    self.$nextTick(() => {
      this.topic_item = this.pivot
      this.router.push({path: 'home'})
    })
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    background-color: #008080;
    font-family: arial;
    min-height: 100vh;
    position: relative;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }

  .header {
    background-color: rgba(0, 74, 74, 0.9);
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header h1 {
    /*padding: 15px;*/
    margin: 0;
    color: #FFFFFF;
    font-size: 50px;
  }

  .content {
    text-align: center;
    padding: 20px;
    margin-top: 55px;
  }

  .previous, .next {
    padding: 12px 15px;
    top:0;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 30px;
    position:absolute;
  }

  .middle {
    margin: 0 150px;
    text-align: center;
  }

  .previous {
    left:0;
  }
  .next {
    right:0;
  }

  .clear {
    clear: both;
  }

  /*.previous {
    text-align: left;
    float: left;
  }

  .next {
    text-align: right;
    float: right;
  }*/
</style>
