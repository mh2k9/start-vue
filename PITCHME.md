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
@title[Vue Instance]

#### Every Vue application starts by creating a new Vue instance with the Vue function:

```html
<html>
   <head>
      <title>VueJs Instance</title>
      <script type = "text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
   </head>
   <body>
      <div id = "vue_det">
         <p>Firstname : {{firstname}}</p>
         <p>Lastname : {{lastname}}</p>
         <p>{{mydetails()}}</p>
      </div>
      <script type="text/javascript">
        var  vm = new Vue({
           el: '#vue_det',
           data: {
              firstname : "Ria", lastname  : "Singh", address    : "Mumbai"
           },
           methods: {
              mydetails : function() {
                 return "I am " + this.firstname + " " + this.lastname;
              }
           }
        })
      </script>
   </body>
</html>
```
