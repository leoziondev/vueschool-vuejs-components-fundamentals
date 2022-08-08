Vue.component('click-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '#click-counter-template'
})
new Vue({
  el: '#app'
})