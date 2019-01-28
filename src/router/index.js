import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Slide from '@/components/Slide'

Vue.use(Router)

const myself = {
  name: 'Mahadi Hasan',
  des: 'Softwre Engineer',
  org: 'W3Wngineers Ltd',
  photo: true
}

const evan = {
  name: 'Evan You',
  des: 'Creator Vue & Core Dev at Meteor',
  org: 'Previously worked as a Creative Technologist at Google. <br/>From 2016 working full-time on Vue.JS framework',
  evan: true
}

let slideItems = [
  'Creator of Vue',
  'What is Vue',
  'Why Vue',
  'Environment Setup',
  'Points of Vue',
  'Instances',
  'Template',
  'Components',
  'Computed Properties',
  'Watch Property',
  'Binding',
  'Events',
  'Rendering',
  'Directives',
  'Routing',
  'Mixins',
  'Render Function',
  'Reactive Interface',
  'Component Lifecycle',
  'PWA',
  'References',
  'Questions and Answers'
].map((item) => { return item.toLowerCase().replace(/\s/g, '-') })

let routers = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    props: { details: myself }
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home,
    props: { details: myself }
  },
  {
    path: '/creator-of-vue',
    // name: 'Home',
    component: Home,
    props: { details: evan }
  }
]

slideItems.forEach((item) => {
  routers.push({
    path: `/${item}`,
    // name: 'Slide',
    component: Slide,
    props: { topic: item }
  })
})

export default new Router({routes: routers})
