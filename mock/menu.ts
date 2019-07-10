export default {
  // 支持值为 Object 和 Array
  'GET /api/getMenuData':
    [{
      name: '题库管理',
      path: 'question',
      icon: 'warning',
      authority: ['admin', 'user'],
      children: [{
        name: '题库列表',
        path: 'list',
      }, {
        name: '编辑题目',
        path: 'create-question',
        hideInMenu: true,
      }, {
        name: '科目管理'
      }]
    }, {
        name: '账号管理',
        icon: 'warning',
        path: 'account',
        children: [{
          name: '账号列表',
          path: 'list',
          authority: 'admin',
        }, {
          name: '建设中',
          path: '',
          authority: ['admin', 'user'],
        }]
      }]
}
