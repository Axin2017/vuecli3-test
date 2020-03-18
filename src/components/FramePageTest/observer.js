// 可变化的属性集合及初始值
const props = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
}

// 存放各个framePage的当前布局值，public是公共的，其余动态挂在
const state = {
  public: { ...props }
}

// 注册了监听的组件数组
const components = []

// 更新布局
function update() {
  components.forEach(com => {
    com.layoutUpdate(state.public)
  })
}

// 属性常量
export const propNames = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
}

// 取当前布局
export function getLayout() {
  return state.public
}

// 监听布局变化的组件注册
export function register(component) {
  components.indexOf(component) === -1 && components.push(component)
}

// 更改布局
export function resize(namespace, prop, value) {
  if (namespace === 'public') {
    console.warn('不能使用public命名空间')
    return
  }
  if (!state[namespace]) {
    state[namespace] = { ...props }
  }
  state[namespace][prop] = state.public[prop] = value
  update()
}

