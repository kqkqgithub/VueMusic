import 'babel-polyfill'
import './common/stylus/index.styl'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.body) // 取消点击的300ms延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
