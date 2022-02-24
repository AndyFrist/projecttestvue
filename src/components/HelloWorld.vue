<template>
  <div class="hello">
    {{msg}}

    <van-button type="info" size="normal" round @click="jump">
      099999
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App '
    }
  },
  methods:{
    jump(){
      this._routePush('SecondPage');

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
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
