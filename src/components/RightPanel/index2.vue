<template>
  <div>
    <Div v-for="div in divs" :key="div" />
    <span class="button-delete" v-for="(div,index) in divs" @click="onDeleteClick(div)" :key="index">删除{{div}}</span>
  </div>
</template>
<script>
import Div from './Div'
export default {
  name: '',
  components: {
    Div
  },
  props: [],
  data() {
    return {
      divs: ['a', 'b', 'c', 'd', 'e']
    }
  },
  created() { },
  mounted() { },
  methods: {
    onDeleteClick(div) {
      //this.divs.splice(this.divs.indexOf(div), 1)
      const index = this.divs.indexOf(div)
      this.divs = this.divs.slice(0, index).concat(this.divs.slice(index + 1, this.divs.length))
    }
  },
  computed: {},
  watch: {}
}
</script>
<style lang="scss" scoped>
.button-delete {
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 5px;
}
</style>
