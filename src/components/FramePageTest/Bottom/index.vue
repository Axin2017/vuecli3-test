<template>
  <div class="bottom" :style="{height}">
    <slot />
  </div>
</template>
<script>
import { resize, propNames } from '../observer'
export default {
  name: 'Bottom',
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
  created() {},
  mounted() {
    setTimeout(() => {
      this.height = '200px'
      resize('test', propNames.BOTTOM, this.height)
    }, 1000)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
