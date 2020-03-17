<template>
  <div id="app">
    <div class="header">
      <router-link v-for="(router,index) in routers" @click.native="handleRouter(index)" :key="index" :class="{actived:selectedIndex==index}" tag="span" :to="router.path">{{router.title}}</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import routerConfig from './router/routerConfig'
import resizeMixin from '@/mixins/resize'
export default {
  name: 'App',
  mixins: [resizeMixin],
  data() {
    return {
      selectedIndex: 0,
      routers: routerConfig
    }
  },
  computed: {
    routerPath() {
      return this.$route.path
    }
  },
  watch: {
    routerPath() {
      this.setActivedRouterIndex()
    }
  },
  methods: {
    handleRouter(index) {
      this.selectedIndex = index
    },
    setActivedRouterIndex() {
      for (let i = 0; i < routerConfig.length; i++) {
        if (routerConfig[i].path === this.routerPath) {
          this.selectedIndex = i
          break
        }
      }
    }
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
.header {
  height: 60px;
  line-height: 60px;
  background-color: #0a2d5a;

  color: #fff;
}
.header span {
  margin: 0 10px;
  cursor: pointer;
}
.header span:hover {
  color: red;
}
.header span.actived {
  color: red;
}
.content {
  position: relative;
  height: calc(100% - 60px);
}
</style>
<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
