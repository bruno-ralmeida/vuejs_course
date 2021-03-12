import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';
import { ValidationProvider, extend } from 'vee-validate';
import { required, min, max } from "vee-validate/dist/rules";

import { routes } from './routes';
import './directives/Transform';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.axios.defaults.baseURL = 'http://localhost:3000';


  
const router = new VueRouter({ routes, mode: 'history' })

extend("required", {
  ...required,
  message: "This field is required"
});
extend('min', min)
extend('max', max)
Vue.component('ValidationProvider', ValidationProvider);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
