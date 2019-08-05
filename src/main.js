import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import store from './store'
import headFul from 'vue-headful';
import vueTopprogress from 'vue-top-progress'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios); //usage for axios
Vue.use(ArgonDashboard); //usage for css
Vue.use(vueTopprogress); //usage for top progress
Vue.use(VueCookie); // Tell Vue to use the plugin

Vue.component('vue-headful', headFul);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
