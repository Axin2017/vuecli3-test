<template>
    <ScrollDiv ref="scroll" class="scroll-box-h" :scrollX="true">
      <span class="content">
        {{msg}}
      </span>
    </ScrollDiv>
</template>
<script>
import BScroll from 'better-scroll'
import ScrollDiv from './ScrollDiv'
export default {
  name: 'ScrollIndex',
  components: {
    ScrollDiv
  },
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.addContent()
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }, 5000)
  },
  methods: {
    addContent() {
      let str = ''
      for (let i = 0; i < 1000; i++) {
        str = str + i.toString()
      }
      this.msg = this.msg + str
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 500px;
  white-space: nowrap;
  border: 1px solid #000;
}
.scroll-box {
  border: 1px solid red;
  height: 200px;
  width: 200px;
  background: #ccc;
  .inner {
    height: 800px;
    width: 800px;
    background: #555;
  }
}
.scroll-box-h {
  border: 1px solid red;
  height: 200px;
  width: 500px;
  overflow: hidden;
  transition: all 1s;
}
</style>
