export default {
  // 支持值为 Object 和 Array
  'GET /api/getMenuData':
    [{
      name: '欢迎',
      path: '/',
      icon: 'smile',
      component:'/Welcome'
    },
      {
      name: '系统管理',
      path: '/',
        icon: 'smile',
        component: null,
      children: [{
        name: '欢迎',
        path: '/user',
        icon: 'smile',
        component: '/user/index'
      }, {
          name: '欢迎',
          path: '/menu',
          icon: 'smile',
          component: '/menu/index'
      }]
      },
   ]
}
