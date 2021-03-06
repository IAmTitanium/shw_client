// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import Toasted from 'vue-toasted';
import User from '@/user'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(Toasted);
Vue.use(User);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
