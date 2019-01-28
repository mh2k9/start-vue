// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    items: [
      'Home',
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
    ],
    current: 'Home'
  },
  components: { App },
  template: '<App v-bind:topics="items" v-bind:pivot="current" v-bind:router="$router"></App>'
})
