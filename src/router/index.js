import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Home from '../views/home.vue'
import Posts from '../views/posts.vue'
import Post from '../views/post.vue'
import About from '../views/about.vue'
export default new Router({
  mode: 'history',
  base: 'blog',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/post/:filename',
      component: Post
    },
    {
      path: '/about',
      component: About
    }
  ]
})
