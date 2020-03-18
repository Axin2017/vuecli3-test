<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot />
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    scrollX: Boolean,
    scrollY: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { scrollX, scrollY, freeScroll } = this
      let option = Object.assign({
        scrollbar: true,
        mouseWheel: true
      }, {
        scrollX,
        scrollY
      })
      this.scroll = new BScroll(this.$refs.wrapper, option)
    })
  },
  methods: {
    refresh() {
      console.log('refresh')
      this.scroll.refresh()
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll-wrapper {
  position: relative;
}
</style>
