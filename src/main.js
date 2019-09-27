import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElTreeSelect from 'el-tree-select'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(ElTreeSelect)

new Vue({
  el: '#app',
  render: h => h(App)
});
