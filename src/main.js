import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Card from "@/components/Example";
import store from "@/store";

Vue.config.productionTip = false
Vue.component('card', Card)

// app.use(store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
