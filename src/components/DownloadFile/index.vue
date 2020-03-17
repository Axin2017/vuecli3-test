<template>
  <div class="download">
    <div>
      下载文件地址:<input v-model="url" style="width:800px;" />
    </div>
    <div>
      下载文件名:<input v-model="filename" style="width:300px;" />
    </div>
    <div>
      <button @click="onDownloadClick">下载测试</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: '',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      url: 'http://172.26.40.166/jstest/Oauth2接入说明20200312.pdf',
      filename: '1.pdf'
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    onDownloadClick() {
      axios.get(this.url, {
        headers: {
          'Content-Type': 'application/pdf'
        },
        responseType: 'blob' // 设置响应数据类型
      })
        .then(res => {
          if (res.status === 200) {
            let url = window.URL.createObjectURL(new Blob([res.data]), { type: 'application/pdf' })
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', this.filename) // 自定义下载文件名（如exemple.txt）
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.download {
  div {
    margin: 10px;
  }
}
</style>
