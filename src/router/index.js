import Vue from 'vue'
import Router from 'vue-router'
import {Toast} from 'vant';
import HelloWorld from '../components/main/HelloWorld'
import MainPage from '../components/main/MainPage'
import TabHomePage from '../components/main/TabHomePage'
import TabSecondPage from '../components/main/TabSecondPage'
import TabMinePage from '../components/main/TabMinePage'

Vue.use(Router)
const SetPage = r => _s() && require.ensure([], () => _d() && r(require('../components/page/SettingPage')), 'SetPage');

const routes = [
  {path: '*', redirect: '/HelloWorld'},
  {path: '/HelloWorld',name:'HelloWorld',component:HelloWorld},
  {
    name:'main',redirect: '/main/home',component: MainPage,
    children:[
      {name:'home',path:'home',component:TabHomePage,meta:{keepAlive: true}},
      {name:'second',path:'second',component:TabSecondPage,meta:{keepAlive: true}},
      {name:'mine',path:'mine',component:TabMinePage,meta:{keepAlive: true}},
    ],meta:{keepAlive: true}
  },
  {name:'SetPage',component:SetPage},
]

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const router = new Router({routes})



//显示Loading
const _s = () => {
  Toast.loading({
    message: 'loading...',
    forbidClick: true,
    loadingType: 'spinner',
  });
  return true;
};

//关闭Loading
const _d = () => {
  Toast.clear();
  return true;
};

export default router
