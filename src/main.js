import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App)
}).$mount("#app")
