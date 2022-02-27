<template>
  <div class="hello">
    <div @click="back" class="common_title" >back</div>
    HomePage
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  },
  mounted () {
    console.log('HomePage');
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
