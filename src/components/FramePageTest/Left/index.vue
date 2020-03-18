<template>
  <div class="left" :style="{width}">
    <slot />
  </div>
</template>
<script>
import { resize, propNames } from '../observer'
export default {
  name: 'Left',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      width: '100px'
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    setTimeout(() => {
      this.width = '200px'
      resize('test', propNames.LEFT, this.width)
    }, 2000)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.left {
  position: absolute;
  left: 0;
  top: 200px;
  bottom: 0;
}
</style>
