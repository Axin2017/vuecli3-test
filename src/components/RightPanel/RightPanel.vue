<script>
export default {
  name: 'RightPanel',
  components: {},
  props: {
    value: String
  },
  data() {
    return {
      panels: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    actived(name) {
      this.$emit('input', name)
      // 这里重新计算宽度
    },
    delete(name, e) {
      // 删除的是当前激活的项
      if (name === this.value) {
        const index = this.names.indexOf(name)
        const copyNames = [...this.names]
        copyNames.splice(index, 1)
        if (copyNames.length) {
          this.$emit('input', copyNames[0])
        } else {
          this.$emit('input', '')
        }
      }
      this.$emit('remove', name)
      e.stopPropagation()
    },
    init() {
      // 筛选出slot中是RightChildPanel的组件
      const panels = this.$slots.default.filter(vnode => vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'RightPanelItem')
      const panesChanged = !(panels.length === this.panels.length && panels.every((pane, index) => pane === this.panels[index]))
      if (panesChanged) {
        this.panels = panels
      }
    }
  },
  computed: {
    tabs() {
      return this.panels.map(({ componentOptions }) => componentOptions.propsData.label)
    },
    names() {
      return this.panels.map(({ componentOptions }) => componentOptions.propsData.name)
    }
  },
  updated() {
    this.init()
  },
  render() {
    const tabs = (
      <div class="tabs">
        {this.tabs.map(tab => {
          return (
            <span class="tab" onClick={() => {
              this.actived(tab)
            }}>
              {tab}
              <i class="el-icon-circle-close" onClick={(e) => {
                this.delete(tab, e)
              }} />
            </span>
          )
        })}
      </div>
    )
    const getClassName = (v) => {
      return v === this.value ? 'panel actived' : 'panel'
    }
    const panels = (
      <div class="panel-wrapper">
        {
          this.panels.map((panel, i) => {
            return (
              <div class={getClassName(this.tabs[i])} key={this.names[i]}>
                {panel}
              </div>
            )
          })
        }
      </div>
    )
    return (
      <div>
        {tabs}
        {panels}
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.tab {
  display: inline-block;
  padding: 5px 10px;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 4px 0 0;
  i {
    margin-left: 5px;
  }
}
.panel {
  position: absolute;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 0;
  display: none;
  &.actived {
    display: block;
  }
}
</style>
