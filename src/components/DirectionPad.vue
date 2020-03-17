<template>
  <div class="direction-pad">
    <div class="dir-wrapper">
      <div class="dir-oprater" ref="op" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectionPad',
  data() {
    return {
      regionX: 0,
      regionY: 0,
      maxMoveDistance: 75
    }
  },
  mounted() {},
  methods: {
    onTouchStart(e) {
      console.log(`onTouchStart${new Date()}`)
      console.log(`${e.touches[0].pageX},${e.touches[0].pageY}`)
      this.regionX = e.touches[0].pageX
      this.regionY = e.touches[0].pageY
    },
    onTouchMove(e) {
      console.log(`onTouchMove${new Date()}`)
      const { xMove, yMove } = this.getMoveData(this.regionX, this.regionY, e.touches[0].pageX, e.touches[0].pageY)
      this.$refs.op.style = `transform:translate(${xMove}px,${yMove}px)`
    },
    onTouchEnd(e) {
      console.log(`onTouchEnd${new Date()}`)
      this.$refs.op.style = ''
    },
    getMoveData(x, y, x1, y1) {
      let xMove = x1 - x
      let yMove = y1 - y
      const absXMove = Math.abs(xMove)
      const absYMove = Math.abs(yMove)

      if (absXMove > this.maxMoveDistance) {
        xMove = xMove > 0 ? this.maxMoveDistance : -this.maxMoveDistance
      }
      if (absYMove > this.maxMoveDistance) {
        yMove = yMove > 0 ? this.maxMoveDistance : -this.maxMoveDistance
      }
      console.log(`${xMove},${yMove}`)
      return { xMove, yMove }
    }
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.direction-pad {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 200px;
  height: 200px;
  border: 1px solid red;
}
.dir-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  border: 1px solid green;
  border-radius: 50%;
}
.dir-oprater {
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
}
</style>

