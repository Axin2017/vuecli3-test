import Vue from 'vue'
import Router from 'vue-router'
import registerRouterHook from './routerPermission'
import routerConfig from './routerConfig'

Vue.use(Router)

const router = new Router({
  routes: routerConfig
})

// registerRouterHook(router)

export default router
