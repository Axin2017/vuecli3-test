<template>
  <div>
    <div class="row" v-for="dom in domDatas" :key="dom">
      <slot :data="dom" :ref="dom"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    domDatas: {
      type: Array,
      required: true
    },
    prop: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: null
    }
  },
  created() { },
  mounted() {
    console.log(this.$slots)
  },
  render(h) {
    return h('div', this.domDatas.map((dom) => {
      return h('div', {
        'class': 'row',
        key: dom
      }, this.$slots.default)
    }))
  },
  methods: {
    bindScroll() {
      const items = document.querySelectorAll('.item')
      const div = this.$refs.scrollDiv
      let timeout = null
      let isRun = false
      const that = this
      div.addEventListener('scroll', function (e) {
        if (!isRun) {
          isRun = true
          // 节流
          timeout = setTimeout(function () {
            for (let i = 0; i < items.length; i++) {
              const item = items[i]
              const top = item.offsetTop - item.parentElement.offsetTop - div.scrollTop //距离div顶部的高度
              const triggerTop = 50 //触发样式的距离
              if (top <= triggerTop && top > -(item.offsetHeight - triggerTop)) {
                item.style = 'border: 10px solid black;'
                that.activedKey = i + 1
              } else {
                item.style = ''
              }
            }
            isRun = false
          }, 100)
        }
      })
    }
  },
  computed: {},
  watch: {}
}
</script>
<style lang="css" scoped>
</style>
