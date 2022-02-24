export default {
  methods:{
    // 路由回退或者历史回退
    _routerBack() {
      this.$router ? this.$router.back() : window.history.back();
    },

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
