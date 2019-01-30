@title[Basic concepts on VueJS]

@snap[auth-pic]
![](src/assets/photo.png)
@snapend

## Mahadi Hasan
### Software Engineer
### W3Engineers Ltd.


---
@snap[auth-pic]
![](src/assets/evan.jpeg)
@snapend

## Evan You
### Creator Vue & Core Dev at Meteor
#### Previously worked as a Creative Technologist at Google. From 2016 working full-time on Vue.JS framework

---
@title[What is Vue]

@snap[north-west]
#### What is Vue?
@snapend

@snap[west span-100]
@ul[spaced text-white]
- Vue (pronounced like view)
- Progressive framework for building user interfaces
- The core library is focused on the view layer only
@ulend
@snapend

---
@title[Why Vue?]

@snap[north-west]
#### Why Vue?
@snapend

@snap[west span-100]
@ul[spaced text-white]
- Very Small Size
- Easy to Understand and Develop
- Simple Integration
- Detailed Documentation
- Integrate with other libraries or existing projects
@ulend
@snapend

---
@title[Environment Setup]

@snap[north-west]
#### Environment Setup
@snapend

@snap[west span-100]
@ul[spaced text-white]
- $ sudo npm install vue,
- $ sudo npm install --global vue-cli
- $ sudo vue init webpack start-vue
- $ sudo cd start-vue
- $ sudo npm start
@ulend
@snapend

---
@title[Important points of Vue]

@snap[north-west]
#### Important points of Vue
@snapend

@snap[west span-100]
@ul[spaced text-white]
- Directive
- v-bind
- v-model
- v-on:event | @event
- el: '#id'
- data: { /* prop stuffs */ }
- methods: { /* methods stuffs */ }
@ulend
@snapend

---
#### Vue Instance
Every Vue application starts by creating a new [Vue Instance](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) with the Vue function:

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<!--Create instance-->
<script>
var vm = new Vue({
  el: '#databinding',
  data: {},
  methods : {},
  computed: {},
  watch: {},
})
</script>
```

---
#### Vue Template
Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data.

```html
<!--Text -->
<span>Message: {{ msg }}</span>
<span v-once>This will never change: {{ msg }}</span>

<!--Raw HTML-->
<p>Using mustaches: {{ rawHtml }}</p> <!--Wrong-->
<p>Using v-html directive: <span v-html="rawHtml"></span></p> <!--Correct-->

<!--Attributes-->
<div v-bind:id="dynamicId"></div>
<button v-bind:disabled="isButtonDisabled">Button</button>

<!--Using JavaScript Expressions-->
{{ ok ? 'YES' : 'NO' }}
```

---
#### Vue Components
Components are reusable Vue instances with a name. We can use this component as a custom element inside a root Vue instance

```html
<div id="components-demo">
  <button-counter></button-counter>
</div>

<script>
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })
</script>
```

---
#### Vue Computed Properties
Reduce the complexity the logical calculation in template

```html
<!--Complex calculation in template-->
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>

<div id="example">
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
<script>
var vm = new Vue({
  el: '#example',
  data: { message: 'Hello' },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```

---
#### Vue Watched Properties
A more generic way to observe and react to data changes on a Vue instance

```html
<div id="demo">{{ fullName }}</div>
<script>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
</script>
```

---
#### Vue Binding
Manipulate or assign values to HTML attributes, change the style, and assign classes with the help of binding directive called v-bind available with VueJS.

```html
<div id = "databinding">
   {{title}}<br/>
   <a href = "hreflink" target = "_blank"> Click Me </a> <br/>
   <a href = "{{hreflink}}" target = "_blank">Click Me </a>  <br/>
   <a v-bind:href = "hreflink" target = "_blank">Click Me </a>   <br/>
</div>
<script type = "text/javascript">
   var vm = new Vue({
      el: '#databinding',
      data: {
         title : "DATA BINDING",
         hreflink : "http://www.google.com"
      }
   });
</script>
```

---
#### Vue Events
**v-on** is the attribute added to the DOM elements to listen to the events in VueJS.

```html
<button v-on:click = "displaynumbers">Click ME</button>
<button @click = "displaynumbers">Click ME</button>
<div v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div>
<button v-on:click.once = "buttonclicked">Click Once</button>
<a href = "http://www.google.com" v-on:click.prevent = "clickme">Click Me</a>
<input type = "text"  v-on:keyup.enter = "showinputvalue"/>
<input type = "text"  v-on:keyup.ctrl.enter = "showinputvalue"/>
```

---
#### Rendering
Vue supports conditional and list rendering

```html
<!--Conditional-->
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>

<!--List rendering-->
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
</script>
```
