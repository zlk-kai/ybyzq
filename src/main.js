import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'
import store from './store'
import "@/assets/css/global.css"

Vue.config.productionTip = false
Vue.use(ElementUI,{locale,size:"mini"});
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
}).$mount('#app')
