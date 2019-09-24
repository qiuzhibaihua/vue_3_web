import { mapGetters, mapActions } from 'vuex'

const Mixin = {
  computed: {
    ...mapGetters(['user','routerData'])
  },
  methods: {
    ...mapActions(['setUserInfo','addRoutes'])
  },
}

export default Mixin