export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/dashboard',
          },
          {
            name: 'home',
            icon: 'dashboard',
            path: '/dashboard',
            component: './DashboardAnalysis',
          },
          {
            name: 'searchList',
            icon: 'pay-circle',
            path: '/listtablelist',
            routes: [
              {
                path: '/listtablelist',
                redirect: '/listtablelist/list',
              },
              {
                icon: 'smile',
                name: 'list',
                path: '/listtablelist/list',
                component: './ListTableList',
                hideInMenu: true
              },
              {
                name: "detail",
                path: '/listtablelist/profilebasic',
                component: './ProfileBasic',
                hideInMenu: true
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
];
