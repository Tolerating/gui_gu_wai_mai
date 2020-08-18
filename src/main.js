import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

Vue.component(Button.name, Button)
Vue.config.productionTip = false
if(process.env.NODE_ENV !== 'production'){
  console.log("开发环境");
  require('./mock');
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
