<template>
  <el-steps :active="active" finish-status="success">
    <el-step @click.native="test">
      <slot name="title">
        测试1
      </slot>
    </el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>
</template>
<script>
export default {
  name: 'ElTimeLine',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {
    active: {
      type: Number,
      default: 0
    },
    direction: {

    }
  },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    test() {
      console.log(11)
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline-box {
  border: 1px solid #d0d4e1;
  border-radius: 6px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
}
</style>
