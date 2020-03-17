<template>
  <div>
    <Page v-model="currentPage" :dataList="dataList" :isSinglePage="true">
      <div class="item" name="default" slot-scope="obj">
        {{obj.obj * obj.obj}}
      </div>
    </Page>
  </div>
</template>
<script>
import Page from './Page'
export default {
  name: '',
  components: { Page },
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentPage: 1
    }
  },
  computed: {},
  watch: {
    currentPage(val) {
      console.log(val)
    }
  },
  created() {},
  mounted() {
    this.test()
  },
  methods: {
    test() {
      setTimeout(() => {
        this.currentPage = 8
      }, 5000)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: inline-block;
  width: 30px;
  height: 20px;
  text-align: center;
  color: red;
  border: 1px solid #ccc;
}
</style>
