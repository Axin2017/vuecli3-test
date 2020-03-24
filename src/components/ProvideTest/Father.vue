<template>
  <div>
    {{father.name}}
    <Child />
  </div>
</template>
<script>
import Child from './Child'
export default {
  name: 'Father',
  components: {
    Child
  },
  directives: {},
  filters: {},
  provide() {
    return {
      father: this.father
    }
  },
  mixins: [],
  props: [],
  data() {
    return {
      father: {
        name: 'Father'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.father = {
        name: 'Child'
      }
    }, 5000)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
