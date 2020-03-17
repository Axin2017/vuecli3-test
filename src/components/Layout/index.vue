<template>
  <div class="layout-box is-vertical">
    <button @click="goToRouter1">路由1</button>
    <button @click="goToRouter2">路由2</button>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="map" :style="mapStyle"></div>
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
    }
  },
  computed: {
    mapStyle() {
      return this.$store.state.mapStyle
    }
  },
  watch: {},
  created() { },
  mounted() {

  },
  methods: {
    goToRouter1() {
      this.$router.push('/layout/layout1')
    },
    goToRouter2() {
      this.$router.push('/layout/layout2')
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-box {
  height: 100%;
  .map {
    position: absolute;
    background: red;
    opacity: 0.5;
    transition: 0.1s all;
  }
}
</style>
