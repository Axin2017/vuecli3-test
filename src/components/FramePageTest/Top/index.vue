<template>
  <div class="top" :style="{height}">
    <slot />
  </div>
</template>
<script>
import { resize, propNames } from '../observer'
export default {
  name: 'Top',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      height: '100px'
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    setTimeout(() => {
      this.height = '200px'
      resize('test', propNames.TOP, this.height)
    }, 4000)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.top {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}
</style>
