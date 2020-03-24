<template>
  <div>
    {{msg.a}}
    <Child :parentMsg="msg" />
  </div>
</template>
<script>
import Child from './Child'
export default {
  name: 'Father',
  components: {
    Child
  },
  data() {
    return {
      msg: {
        a: 'a'
      }
    }
  },
  watch: {
    msg() {
      console.log('msg changed')
    },
    'msg.a': function() {
      console.log('msg.a changed')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
