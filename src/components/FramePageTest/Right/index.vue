<template>
  <div class="right" :style="{width}">
    <slot />
  </div>
</template>
<script>
import { resize, propNames } from '../observer'
export default {
  name: 'Right',
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
      resize('test', propNames.RIGHT, this.width)
    }, 3000)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
