import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ejercicio1 from '@/components/ejercicio1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ejercicio1',
      name: 'ejercicio1',
      component: ejercicio1
    }
  ]
})
