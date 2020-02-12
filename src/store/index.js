import Vue from 'vue'
import Vuex from 'vuex'
import { routes, routerMap } from '@/router/router.js'
import { rules } from '../api/user'
import { setToken } from '@/lib/util'
Vue.use(Vuex)

const getAccesRouterLsit = (routes, rules) => {
  return routes.filter(item => {
    if (rules[item.name]) {
      if (item.children) item.children = getAccesRouterLsit(item.children, rules)
      return true
    } else return false
  })
}

export default new Vuex.Store({
  state: {
    routers: routes, // 默认挂载到路由列表的路由 404 和登录 都可以访问
    hasGetRules: false, // 是否获取用户权限列表
    compontendRules: {}
  },
  mutations: {
    CONCAT_ROUTES (state, routerList) {
      state.routers = routerList.concat(routes)
      state.hasGetRules = true
    },
    TOKEN (state, token) {
      state.token = token
    },
    RulesBol (state, bol) { // 退出登录重新获取用户权限列表
      state.hasGetRules = bol
    },
    SET_COMRULES (state, obj) {
      console.log('组件权限', obj)
      state.compontendRules = obj
    }
  },
  actions: {
    RULES ({ commit }, data) {
      return new Promise((resolve, reject) => {
        rules().then(res => {
          setToken(res.data.data.token)
          resolve(res.data.data.rules.page)
          commit('SET_COMRULES', res.data.data.rules.component)
        }).catch(error => {
          reject(error)
        })
      })
    },
    concatRoutes ({ commit }, rules) {
      return new Promise((resolve, reject) => {
        try {
          let routerList = []
          // 都是true
          if (Object.entries(rules).every(item => item[1])) {
            // Object.entries()会返回二维数组{a:1,b:2}==>[[a,1],[b,2]]
            // .every 会遍历每个数组    //返回true 就是都可以访问
            routerList = routerMap
          } else {
            routerList = getAccesRouterLsit(routerMap, rules) // 过滤之后可以访问的列表
          }
          commit('CONCAT_ROUTES', routerList)
          resolve(routerList)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
})
