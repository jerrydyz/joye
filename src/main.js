// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log(htmlWidth);
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/750*100 + 'px';

import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/iconfont/iconfont.css'

import tabbar from '@/commons/tabbar'
Vue.component("tabbar", tabbar)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
