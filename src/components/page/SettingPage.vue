<template>
  <div class="hello">
    {{msg}}

    <van-button type="info" size="normal" round @click="jump">
      back
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'SettingPage',
  data () {
    return {
      msg: 'Welcome SettingPage '
    }
  },
  methods:{
    jump(){
      this._routerBack();

    },
  }
}
</script>


<style lang="less"  scoped>
.hello {
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #f2b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
