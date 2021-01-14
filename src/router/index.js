import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';
import Home from '@/views/home/Home';
import About from '@/views/about/About';
import Product from '@/views/product/Product';
import Examples from '@/views/home/Examples';
import Details from '@/views/home/Details';
import Notfound from '@/components/404';

Vue.use (Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        index: 0
      },
      component: Layout,
      children: [
        {
          path: '/',
          component: Layout,
          children: [
            {
              path: '',
              component: Home,
              meta: {
                index: 4
              }
            },
            {
              path: 'details/:id',
              component: Details,
              meta: {
                index: 4
              }
            }
          ]
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            index: 1
          },
          component: About
        },
        {
          path: '/product',
          name: 'product',
          meta: {
            index: 2
          },
          component: Product
        },
        {
          path: '/examples',
          name: 'examples',
          meta: {
            index: 3
          },
          component: Examples
        }
      ]
    },
    {
      path: '/notfound',
      name: 'notfound',
      meta: {
        title: '404',
        expetc: true
      },
      component: Notfound
    },
    { path: '*', redirect: '/notfound', hidden: true }
  ]
})
