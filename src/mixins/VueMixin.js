export default {
  methods:{
    _routeReplace(toName, params) {
      this.$router.replace({
        name: toName,
        params: params,
      })
    },

    _routePush(toName, params) {
      this.$router.push({
        name: toName,
        params: params,
      })
    },

    /**
     * 路由跳转带有query参数
     */
    _routePushQ(toName, params) {
      this.$router.push({
        name: toName,
        query: params,
      })
    },

    _routeReplaceQ(toName, params) {
      this.$router.replace({
        name: toName,
        query: params,
      })
    },

  }
}
