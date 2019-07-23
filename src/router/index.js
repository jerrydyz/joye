import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import resetpw from '@/pages/resetpw'
import index from '@/pages/index'
import courses from '@/pages/courses'
import news from '@/pages/news'
import my from '@/pages/my'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/resetpw',
      name: 'resetpw',
      component: resetpw
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
