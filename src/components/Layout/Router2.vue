<template>
  <Layout>
    <template slot="header">
      <div class="routre2-header">路由2 header</div>
    </template>
    <template slot="aside">
      <div class="routre2-aside">路由2 aside</div>
    </template>
    <template slot="main">
      <div class="routre2-main">路由2 main</div>
    </template>
    <template slot="rightPanel">
      <div class="routre2-rightPanel">路由2 rightPanel</div>
    </template>
    <template slot="footer">
      <div class="routre2-footer">路由2 footer</div>
    </template>
  </Layout>
</template>
<script>
import Layout from './Layout'
export default {
  name: 'Router2',
  components: {
    Layout
  }
}
</script>
<style lang="scss" scoped>
.routre2-header {
  height: 200px;
}
.routre2-aside {
  width: 200px;
}
.routre2-rightPanel {
  width: 200px;
}
.routre2-footer {
  height: 200px;
}
</style>
