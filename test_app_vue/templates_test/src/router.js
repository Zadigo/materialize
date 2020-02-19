import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import SinglePost from './views/blog/SinglePost.vue'
import ListPosts from './views/blog/ListPosts.vue'
import Dashboard from './views/Dashboard.vue'
import PageOne from './views/dashboard/PageOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/1',
      name: 'dashboard_one',
      component: PageOne
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/blog',
      name: 'blog',
      component: ListPosts
    },
    {
      path: '/blog/:id',
      name: 'post_details',
      component: SinglePost
    }
  ]
})
