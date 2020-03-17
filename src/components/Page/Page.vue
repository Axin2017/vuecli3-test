<template>
  <div>
    <div class="default-item" :class="{actived: activedItem === item}" v-for="item in dataList" @click="onItemClick(item)" :key="item">
      <slot name="default" v-bind:obj="item">
        {{item}}
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {
    dataList: Array,
    value: Number,
    isSinglePage: Boolean
  },
  data() {
    return {
      activedItem: -1
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.activedItem = val
    }
  },
  created() {},
  mounted() {},
  methods: {
    onItemClick(item) {
      this.activedItem = item
      this.$emit('input', item)
      this.$emit('pageChange', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.actived {
  background: red;
  color: #fff;
}
.default-item {
  display: inline-block;
  border: 1px solid green;
}
</style>
