// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import $ from 'jquery'
import Chart from 'chart.js'
import headroom from 'vue-headroom'

Vue.config.productionTip = false
Vue.use(headroom)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
