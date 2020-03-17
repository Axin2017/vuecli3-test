<template>
  <TimeLine @click="test()" class="time-line" :data="timeList" />
</template>
<script>
import TimeLine from './TimeLine'
export default {
  name: 'TimeLineIndex',
  components: { TimeLine },
  data() {
    return {
      timeList: ['2001', '2002', '2003', '2019', '2020']
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.time-line {
  margin-top: 200px;
}
</style>
