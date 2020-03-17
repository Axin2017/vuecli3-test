<template>
  <div>
    <button @click="onExportClick">导出</button>
    <table id="tb">
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a1</td>
          <td>b1</td>
          <td>c1</td>
        </tr>
        <tr>
          <td>a2</td>
          <td>b2</td>
          <td>c2</td>
        </tr>
        <tr>
          <td>a3</td>
          <td>b3</td>
          <td>c3</td>
        </tr>
      </tbody>
    </table>
    <img src="https://www.baidu.com/img/bd_logo1.png?where=super" />
    <div id="echarts" ref="chart" />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
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
    let chartEl = window.echarts.init(this.$refs.chart)
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
    chartEl.setOption(option, true)
  },
  methods: {
    onExportClick() {
      // 创建可下载链接
      let t = `
        <table border="1">
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>a1</td><td>b1</td><td>c1</td></tr>
        <tr><td>a2</td><td>b2</td><td>c2</td></tr>
        <tr><td>a3</td><td>b3</td><td>c3</td></tr>
      </tbody>
    </table>
    <img src="https://www.baidu.com/img/bd_logo1.png?where=super" />
      `
      let eleLink = document.createElement('a')
      eleLink.download = 'aa.xls'
      eleLink.style.display = 'none'
      eleLink.target = 'blank'
      // 字符内容转变成blob地址
      let blob = new Blob([t], { type: 'application/octet-stream' })
      eleLink.href = URL.createObjectURL(blob)
      eleLink.click() // 触发点击
    }
  }
}
</script>
<style lang="scss" scoped>
#echarts {
  width: 500px;
  height: 500px;
}
</style>
