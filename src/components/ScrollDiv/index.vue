<template>
  <ScrollDiv class="scroll-box">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {

  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.scroll-box {
  height: 200px;
  width: 400px;
  background: #ccc;
  .inner {
    height: 800px;
    width: 800px;
    background: #555;
  }
}
</style>
