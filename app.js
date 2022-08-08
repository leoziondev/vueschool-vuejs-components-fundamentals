Vue.component('click-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button @click="count++" class="border border-gray-300 rounded-md py-2 px-4">{{count}}</button>'
})
new Vue({
  el: '#app'
})