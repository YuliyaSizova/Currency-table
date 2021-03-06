import Vue from 'vue'
import App from './App.vue'
import Grid from 'gridjs-vue'

Vue.use(Grid)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
