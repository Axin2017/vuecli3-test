<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot />
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollbar: true,
        mouseWheel: true
      })
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.scroll-wrapper {
  position: relative;
  overflow: hidden;
}
</style>
