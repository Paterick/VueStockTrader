import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'

import { store } from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuestocktrader-49237.firebaseio.com/';

Vue.filter('currency', (value) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    return formatter.format(value);  
});

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPoisition) { // Tells the router to scroll the browser to a selector if there is one
    if( savedPoisition ) {
      return savedPoisition;
    }

    if( to.hash ) {
      return {selector: to.hash}
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
