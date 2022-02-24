<template>
  <div class="hello">
    <div @click="back" class="common_title" >back</div>
    SecondPage
  </div>
</template>

<script>
export default {
  name: 'SecondPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('secondpage');
  },
  methods:{
    back(){
      console.log('back')
      this._routerBack();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
