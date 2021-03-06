// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/styles/iconfont/iconfont.css'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
