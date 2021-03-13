import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';
import { ValidationProvider, ValidationObserver, extend, localize, localeChanged } from 'vee-validate';
import { required, min, max } from "vee-validate/dist/rules";
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';
import { routes } from './routes';
import './directives/Transform';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css'
import './assets/Js/teste.js'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.axios.defaults.baseURL = 'http://localhost:3000';


const router = new VueRouter({ routes, mode: 'history' })
localize('pt_BR', pt_BR)
extend('required', required);
extend('min', min)
extend('max', max)

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
