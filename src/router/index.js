import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import SecondPage from '../components/SecondPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',name:'HelloWorld',component:HelloWorld},
    {path: '/',name:'SecondPage',component:SecondPage},
  ]
})

export default router
