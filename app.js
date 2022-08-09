Vue.component('todo-item', {
  template: '#todo-item',
  data() {
    return {
      completed: false
    }
  }
})

new Vue({
  el: '#app'
})