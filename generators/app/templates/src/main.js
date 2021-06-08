import Vue from 'vue';
import ElementUI from 'element-ui';
// import yhUI from 'yh-ui-components';
import router from './router';
import axios from './utils/request';
// import store from './store';
import App from './App';
// import './directives';
// import './permission';
// require('yh-ui-components/lib/css/yhUI.css');
// import filters from './filter';

// import './element-variables.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(yhUI);
Vue.prototype.$axios = axios;
// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
