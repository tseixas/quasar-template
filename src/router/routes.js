
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/funcionalidades',
    component: () => import('layouts/MainLayout'),
    children: [
      {
        path: '',
        name: 'functionalities',
        component: () => import('pages/Funcionality/Index')
      },
      {
        path: 'novo',
        name: 'functionalitiesNew',
        component: () => import('pages/Funcionality/New')
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
