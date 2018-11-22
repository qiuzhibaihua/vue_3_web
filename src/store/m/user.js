const state = {
    user: null
}

const getters = {
    user: state => state.user
}

const actions = {
    getUserInfo({ commit }, payload) {
        const uid = document.querySelector("#uid").value || ''
        return {uid}
    },
    setUserInfo({ commit }, user) {
        commit('setUserInfo', user)
    }
}

const mutations = {
    setUserInfo (state, user) {
        state.user = user
    }
}

export default {state, getters, actions, mutations }