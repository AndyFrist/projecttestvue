// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMixin from './mixins/VueMixin'
import './assets/style/common.less'
import Vant , {Lazyload, Locale}from 'vant'

import 'vant/lib/index.less'
import 'vant/lib/icon/local.less';

Vue.use(Vant);
Vue.mixin(VueMixin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
