import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import handleRem from './assets/js/rem.js';
import App from './App.vue';
import vueRotuer from 'vue-router';
import routes from './routerConfig';
import store from './store';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(vueRotuer);
Vue.use(ElementUI);
handleRem();
Vue.config.productionTip = false;
console.log(store);


const router = new vueRotuer(routes);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
