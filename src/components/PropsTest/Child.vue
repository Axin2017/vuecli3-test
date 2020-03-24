<template>
  <div>
    {{parentMsg.a}}
    <button style="margin-left:10px;" @click="onChangePropClick">点击修改</button>
  </div>
</template>
<script>
export default {
  name: 'Child',
  props: [
    'parentMsg'
  ],
  methods: {
    onChangePropClick() {
      this.parentMsg.a = 'childMsg'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
