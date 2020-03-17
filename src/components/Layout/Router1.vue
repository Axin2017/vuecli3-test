<template>
  <Layout>
    <template slot="header">
      <div class="routre1-header">路由1 header</div>
    </template>
    <template slot="aside">
      <div class="routre1-aside">路由1 aside</div>
    </template>
    <template slot="main">
      <div class="routre1-main">路由1 main</div>
    </template>
    <template slot="rightPanel">
      <div class="routre1-rightPanel">路由1 rightPanel</div>
    </template>
    <template slot="footer">
      <div class="routre1-footer">路由1 footer</div>
    </template>
  </Layout>
</template>
<script>
import Layout from './Layout'
export default {
  name: 'Router1',
  components: {
    Layout
  }
}
</script>
<style lang="scss" scoped>
.routre1-header {
  height: 100px;
}
.routre1-aside {
  width: 100px;
}
.routre1-rightPanel {
  width: 100px;
}
.routre1-footer {
  height: 100px;
}
</style>
