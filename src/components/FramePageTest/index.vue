<template>
  <div class="frampage-test">
    <Map />
    <FramePage>
      <div slot="top">this is top</div>
      <div slot="right">this is right</div>
      <div slot="bottom">this is bottom</div>
      <div slot="left">this is left</div>
      <div slot="content">this is content</div>
    </FramePage>
  </div>
</template>
<script>
import FramePage from './FramePage'
import Map from './Map'
export default {
  name: 'FramePageTest',
  components: {
    FramePage,
    Map
  },
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.frampage-test{
  position: absolute;
  top: 100px;
  left: 100px;
  right: 100px;
  bottom: 100px;
  border: 1px solid #000;
}
.content {
  position: absolute;
  border: 1px solid red;
  transition: all 3s;
  text-align: center;
}
</style>
