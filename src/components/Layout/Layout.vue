<template>
  <div class="container is-vertical">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <div class="container is-horizontal">
      <aside class="aside">
        <slot name="aside"></slot>
      </aside>
      <div class="container is-vertical mc">
        <div class="container is-horizontal">
          <main ref="main" class="main">
            <slot name="main"></slot>
          </main>
          <div class="rightPanel">
            <slot name="rightPanel"></slot>
          </div>
        </div>
        <footer class="footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      mapStyle: {}
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
  },
  activated() {
    this.bindEvent()
  },
  deactivated() {
    this.unbindEvent()
  },
  methods: {
    onElementResize(e) {
      this.msg = JSON.stringify(this.$refs.main.getBoundingClientRect())
      const mapStyle = {
        width: this.$refs.main.offsetWidth + 'px',
        height: this.$refs.main.offsetHeight + 'px',
        left: this.$refs.main.getBoundingClientRect().left + 'px',
        top: this.$refs.main.getBoundingClientRect().top - 60 + 'px'
      }
      this.mapStyle = mapStyle
      this.$store.commit('setMapStyle', mapStyle)
    },
    bindEvent() {
      window.addResizeListener(this.$refs.main, this.onElementResize)
    },
    unbindEvent() {
      window.removeResizeListener(this.$refs.main, this.onElementResize)
    }
  }
}
</script>
<style lang="scss" scoped>
.is-vertical {
  flex-direction: column;
}
.is-horizontal {
  flex-direction: row;
}
.container {
  height: 100%;
  display: flex;
  flex: 1;
}
.header {
  background: #ccc;
  transition: 0.1s all;
}
.aside {
  height: 100%;
  background: lightblue;
}
.main {
  height: 100%;
  flex: 1;
  background: lightslategrey;
  color: #fff;
}
.footer {
  background: #ccc;
}
.map {
  position: absolute;
  background: red;
  transition: 0.1s all;
}
</style>
