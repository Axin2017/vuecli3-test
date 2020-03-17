<template>
  <div>
    <!-- <div id="anchor-panel">
      <span class="tab" :class="{actived:activedKey === tab}" v-for="tab in tabList" :key="tab">{{tab}}</span>
    </div>
    <div id="scrollpanel" ref="scrollDiv">
      <div class="item" :id="'div'+item" v-for="item in itemList" :key="item">{{item}}</div>
    </div> -->
    <ScrollPanel :domDatas="tabList" prop="id">
      <template v-slot:default="propsData">
        <div>{{propsData.data}}</div>
      </template>
    </ScrollPanel>
  </div>
</template>
<script>
import ScrollPanel from './ScrollPanel'
export default {
  name: '',
  components: {
    ScrollPanel
  },
  props: [],
  data() {
    return {
      tabList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      activedKey: 0
    }
  },
  created() { },
  mounted() {
    //this.bindScroll()
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
.tab {
  display: inline-block;
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.actived {
  background-color: green;
}
#scrollpanel {
  height: 500px;
  border: 1px solid red;
  overflow: auto;
}
.item {
  height: 100px;
  line-height: 100px;
}
.item:nth-of-type(2n) {
  background: #eee;
}
</style>
