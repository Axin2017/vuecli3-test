<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'RightPanelItem',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
