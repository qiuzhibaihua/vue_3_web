import { StaticRouterMap } from '@/router/index'
const state = {
    user: null,
    routerData:[]
}

const getters = {
    user: state => state.user,
    routerData:state => state.routerData,
}

const actions = {
    setUserInfo({ commit }, user) {
        commit('setUserInfo', user)
    },
    // 添加动态路由
    addRoutes({ commit }, routerData) {
        commit('addRoutes', StaticRouterMap.concat(routerData)) // 进行路由拼接并存储
    }
}

const mutations = {
    setUserInfo (state, user) {
        state.user = user
    },
    addRoutes (state, routerData) {
        console.log(routerData)
        state.routerData = routerData
        // router.push('/relationGraph')
    }

}

export default {state, getters, actions, mutations }