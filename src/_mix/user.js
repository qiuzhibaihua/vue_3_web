import store from '../store'
import { mapGetters } from 'vuex'

// store.dispatch('getUserInfo').then(data => {
//   store.dispatch('setUserInfo', data)
// })

const uid = document.querySelector("#uid") ? document.querySelector("#uid").value : ''
const webtoken = document.querySelector("#webtoken") ? document.querySelector("#webtoken").value : ''
const token = Number(uid).toString(16)
store.commit('setUserInfo', {uid, webtoken, token})

const Mixin = {
  computed: {
    ...mapGetters(['user'])
  }
}

export default Mixin