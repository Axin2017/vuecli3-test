
export default [
  {
    path: '/',
    name: 'test',
    title: '首页',
    component: () => import('@/components/Test')
  },
  {
    path: '/directionPad',
    name: 'DirectionPad',
    title: '方向盘',
    component: () => import('@/components/DirectionPad')
  },
  {
    path: '/echartsMap',
    name: 'EchartsMap',
    title: 'echarts地图',
    component: () => import('@/components/EchartsMap')
  },
  {
    path: '/rightPanel',
    name: 'rightPanel',
    title: '地图自适应',
    component: () => import('@/components/RightPanel')
  },
  {
    path: '/anchorScollPanel',
    name: 'anchorScollPanel',
    title: '关联滚动tab',
    component: () => import('@/components/AnchorScollPanel')
  },
  {
    path: '/viewerjs',
    name: 'viewerjs',
    title: 'viewerjs',
    component: () => import('@/components/Viewerjs')
  },
  {
    path: '/layout',
    name: 'layout',
    title: 'layout',
    component: () => import('@/components/Layout'),
    children: [
      {
        path: 'layout1',
        name: 'layout1',
        title: 'layout1',
        component: () => import('@/components/Layout/Router1')
      },
      {
        path: 'layout2',
        name: 'layout2',
        title: 'layout2',
        component: () => import('@/components/Layout/Router2')
      }
    ]
  },
  {
    path: '/page',
    name: 'page',
    title: 'page',
    component: () => import('@/components/Page')
  },
  {
    path: '/scrollDiv',
    name: 'scrollDiv',
    title: 'scrollDiv',
    component: () => import('@/components/ScrollDiv')
  },
  {
    path: '/timeLine',
    name: 'timeLine',
    title: 'timeLine',
    component: () => import('@/components/TimeLine')
  },
  {
    path: '/exportExcel',
    name: 'exportExcel',
    title: 'exportExcel',
    component: () => import('@/components/ExportExcel')
  },
  {
    path: '/downloadFile',
    name: 'downloadFile',
    title: 'downloadFile',
    component: () => import('@/components/DownloadFile')
  },
  {
    path: '/framePageTest',
    name: 'framePageTest',
    title: 'framePageTest',
    component: () => import('@/components/FramePageTest')
  }
]
