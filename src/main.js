import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'Vuex'
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {
      nome: null,
      email: null,
      idade: null,
      celular: null,
      senha: null,
      confirmarSenha: null
    }
  },
  mutations: {
    SET_USER (store, obj) {
      store.user = obj.user
    }
  }
});
new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
