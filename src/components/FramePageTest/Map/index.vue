<template>
  <div class="map" :style="{left, right, top, bottom}">Map</div>
</template>
<script>
import { register } from '../observer'
export default {
  name: 'Map',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    register(this)
  },
  methods: {
    layoutUpdate(layout) {
      this.left = layout.left
      this.top = layout.top
      this.right = layout.right
      this.bottom = layout.bottom
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  position: absolute;
}
</style>
