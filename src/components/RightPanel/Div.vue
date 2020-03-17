<template>
  <div @click="v = v + 1">{{v}}</div>
</template>
<script>
export default {
  name: 'Div',
  data() {
    return {
      v: 0
    }
  },
  created() {
  }
}
</script>
