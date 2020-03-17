<template>
  <RightPanel v-model="name" class="right-panel" @remove="onPanelRemove">
    <RightPanelItem label="panel1" name="panel1">
      <Div />
    </RightPanelItem>
    <RightPanelItem label="panel2" name="panel2" v-if="show2">
      <Div />
    </RightPanelItem>
    <RightPanelItem label="panel3" name="panel3">
      <Div />
    </RightPanelItem>
  </RightPanel>
</template>
<script>
import RightPanel from './RightPanel'
import RightPanelItem from './RightPanelItem'
import Div from './Div'
export default {
  name: 'RightPanelTest',
  components: {
    RightPanel,
    RightPanelItem,
    Div
  },
  data() {
    return {
      name: 'panel1',
      show2: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.show2 = true
    }, 10000)
  },
  methods: {
    onPanelRemove(name, isCurrent) {
      if (name === 'panel2') {
        this.show2 = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.right-panel {
  position: relative;
}
</style>
