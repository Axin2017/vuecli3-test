<template>
  <div :class="['timeline-inner-wrapper',direction === 'horizontal' ? 'horizontal' : 'vertical']">
    <div
      v-show="autoPlayTimeInterval"
      class="autoplay-box"
      @click="onAutoplayClick"
    >
      {{isAutoPlaying ? '暂停' : '播放'}}
    </div>
    <div class="timeline-box">
      <div class="list-box">
        <div class="item" v-for="(item,index) in data" :key="index">
          {{item[labelField]}}
        </div>
      </div>
      <div class="line-box">
        <div class="line-circle-wrapper" v-for="(item,index) in data" :key="index">
          <div :class="['circle', {active: (isMultiple && value >= index) || value === index}]" @click="onItemClick(index)"></div>
          <div :class="['line', {active: isMultiple && value > index}]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'TimeLine',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {
    // 方向，横向：horizontal，纵向：vertical
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 自动播放间隔，单位毫秒。如果不设置或者设置为0，则不自动播放，不会显示播放按钮。
    autoPlayTimeInterval: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 1000
      }
    },
    // 需要渲染的数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 如果传对象数组，需要指明显示哪个字段
    labelField: {
      type: String
    },
    // 是否连续激活
    isMultiple: {
      type: Boolean,
      default: false
    },
    // v-model绑定,激活的索引
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    this.autoPlayTimeout = null
    return {
      isAutoPlaying: false
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  destroyed () {
    if (this.autoPlayTimeout) {
      clearTimeout(this.autoPlayTimeout)
    }
  },
  methods: {
    onItemClick (index) {
      this.$emit('input', index)
    },
    onAutoplayClick () {
      if (this.autoPlayTimeInterval) {
        this.autoPlay(!this.isAutoPlaying)
        this.isAutoPlaying = !this.isAutoPlaying
      }
    },
    autoPlay (isPlay) {
      if (isPlay) {
        if (this.autoPlayTimeout) {
          clearTimeout(this.autoPlayTimeout)
        }
        this.autoPlayTimeout = setTimeout(() => {
          if (this.value < this.data.length - 1) {
            this.$emit('input', this.value + 1)
          } else {
            this.$emit('input', 0)
          }
          this.autoPlay(isPlay)
        }, this.autoPlayTimeInterval)
      } else {
        if (this.autoPlayTimeout) {
          clearTimeout(this.autoPlayTimeout)
        }
      }
    }
  }
})
</script>
<style lang="scss" scoped>
$line-circle-color: #dedede;
$line-circle-color-active: #00b6ea;

@mixin horizontal-flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@mixin vertical-flex-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@mixin autoplay-box {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
}

@mixin circle {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid $line-circle-color;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1001;
  &.active {
    width: 14px;
    height: 14px;
    border-color: $line-circle-color-active;
    box-shadow: 0 0 3px 1px $line-circle-color-active;
  }
  &:hover {
    border-color: $line-circle-color-active;
  }
}

@mixin line {
  position: absolute;
  border: 2px solid $line-circle-color;
  transition: all 0.3s;
  z-index: 1000;
  &.active {
    border-color: $line-circle-color-active;
  }
}

.timeline-inner-wrapper {
  padding: 10px;
  border: 1px solid #d0d4e1;
  border-radius: 6px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  &.horizontal {
    display: flex;
    .autoplay-box {
      @include autoplay-box;
    }
    .timeline-box {
      display: flex;
      flex: 1;
      flex-direction: column;
      .list-box {
        @include horizontal-flex-wrapper;
        order: 1;
      }
      .line-box {
        @include horizontal-flex-wrapper;
        min-width: 400px;
        order: 2;
        .line-circle-wrapper {
          position: relative;
          width: 100%;
          height: 30px;
          .circle {
            @include circle;
            left: 50%;
            top: 50%;
            margin: -8px 0 0 -8px;
            &.active {
              margin: -9px 0 0 -9px;
            }
          }
          .line {
            @include line;
            /* 20px = 左侧圆半径8px，右侧圆半径8px，自身border 4px; */
            width: calc(100% - 20px);
            left: 50%;
            top: 50%;
            margin-left: 8px;
            margin-top: -2px;
          }
          &:last-of-type {
            .line {
              display: none;
            }
          }
        }
      }
    }
  }
  &.vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .autoplay-box {
      @include autoplay-box;
    }
    .timeline-box {
      display: flex;
      flex: 1;
      .list-box {
        @include vertical-flex-wrapper;
        order: 2;
        .item {
          flex: 1;
        }
      }
      .line-box {
        @include vertical-flex-wrapper;
        order: 1;
        width: 30px;
        min-height: 400px;
        .line-circle-wrapper {
          flex: 1;
          position: relative;
          height: 100%;
          .circle {
            @include circle;
            left: 50%;
            margin-left: -8px;
            &.active {
              margin-left: -9px;
            }
          }
          .line {
            @include line;
            /* 20px = 上侧圆16px，自身border 4px; */
            height: calc(100% - 20px);
            left: 50%;
            margin-left: -2px;
            margin-top: 16px;
          }
          &:last-of-type {
            .line {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
