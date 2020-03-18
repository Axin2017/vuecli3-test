<template>
  <div class="framepage">
    <Left>
      <slot name="left" />
    </Left>
    <Top>
      <slot name="top" />
    </Top>
    <Bottom>
      <slot name="bottom" />
    </Bottom>
    <Right>
      <slot name="right" />
    </Right>
    <div class="content" :style="{left, right, top, bottom}">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
import { register } from '../observer'
import Left from '../Left'
import Right from '../Right'
import Top from '../Top'
import Bottom from '../Bottom'
export default {
  name: 'FramePage',
  components: {
    Left,
    Top,
    Right,
    Bottom
  },
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    register(this)
  },
  methods: {
    layoutUpdate(layout) {
      this.left = layout.left
      this.top = layout.top
      this.right = layout.right
      this.bottom = layout.bottom
    }
  }
}
</script>
<style lang="scss" scoped>
.framepage {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  .content {
    position: absolute;
    border: 1px solid red;
    transition: all 3s;
    text-align: center;
  }
}
</style>
