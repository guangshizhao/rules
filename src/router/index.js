import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from '@/store'
import { setToken, getToken } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  console.log('权限列表', store.state.hasGetRules)
  if (token) {
    console.log('1-->看看有没有token', token)
    if (!store.state.hasGetRules) {
      console.log('1.1-->没有获取权限列表')
      store.dispatch('RULES').then(rules => {
        console.log('1.1.1-->没有获取权限列表,获取权限列表', rules)
        store.dispatch('concatRoutes', rules).then(routers => {
          console.log('1.1.2--> 拼接路由列表,添加', routers)
          console.log('路由', store.state.routers)
          router.addRoutes(routers)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      }).catch(() => {
        setToken('')
        next({ name: 'login' })
      })
    } else {
      console.log('1.2--> 已经获取权限列表')
      next()
    }
  } else {
    console.log('2--> token不存在')
    if (to.name === 'login') {
      console.log('2.1-->token不存在,跳转的是登录页')
      next()
    } else {
      console.log('2.2-->token不存在,跳转的不是登录页,转到登录页')
      next({ name: 'login' })
    }
  }
})

export default router
