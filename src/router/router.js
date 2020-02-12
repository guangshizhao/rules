import Layout from '../components/layout/layout'

// 需要判断的
export const routerMap = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页'
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home_index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/one',
    name: 'one',
    component: Layout,
    meta: {
      title: '菜单一'
    },
    children: [
      {
        path: 'one_index',
        name: 'one_index',
        meta: {
          title: '菜单一的第一个的菜单'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: 'one_index1',
        name: 'one_index1',
        meta: {
          title: '菜单一的第二个的菜单'
        },
        component: () => import('@/views/one/one1.vue')
      }
    ]
  },
  {
    path: '/two',
    name: 'two',
    component: Layout,
    meta: {
      title: '菜单二'
    },
    children: [
      {
        path: 'two_index',
        name: 'two_index',
        meta: {
          title: '菜单二的第一个的菜单'
        },
        component: () => import('@/views/two/two.vue')
      },
      {
        path: 'two_index1',
        name: 'two_index1',
        meta: {
          title: '菜单二的第二个的菜单'
        },
        component: () => import('@/views/two/two1.vue')
      }
    ]
  },
  {
    path: '/three',
    name: 'three',
    meta: {
      title: '菜单三'
    },
    component: Layout,
    children: [
      {
        path: 'three_index',
        name: 'three_index',
        meta: {
          title: '菜单三的第一个的菜单'
        },
        component: () => import('@/views/three/three.vue')
      },
      {
        path: 'three_index1',
        name: 'three_index1',
        meta: {
          title: '菜单三的第二个的菜单'
        },
        component: () => import('@/views/three/three1.vue')
      }
    ]
  }

]

export const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]
