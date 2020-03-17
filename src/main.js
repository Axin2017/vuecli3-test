import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerCustomPlugins } from './plugins'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import dci3d from 'dci3d-vue-ui'
Vue.config.productionTip = false

Vue.use(dci3d)

// 注册自定义插件
registerCustomPlugins(Vue)
Vue.use(Viewer)
// elment-ui
Vue.use(Element, {
  size: 'small' // set element-ui default size
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
