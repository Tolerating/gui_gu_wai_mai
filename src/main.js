import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './assets/loading.gif'
import './filters'
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{  //内部自定义了一个指令，v-lazy
  loading,
})
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
