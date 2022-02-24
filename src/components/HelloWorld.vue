<template>
  <div class="hello">
    {{msg}}
    <div @click="jump">
      jump
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    jump(){
      this._routePush('SecondPage');
    },
  }
}
</script>


<style lang="less" scoped>

</style>
