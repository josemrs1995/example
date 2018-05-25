import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ejercicio1 from '@/components/ejercicio1'
import ejercicio2 from '@/components/ejercicio2'
import lista from '@/components/lista'
import editar from '@/components/editar'

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
    },
    {
      path: '/ejercicio2',
      name: 'ejercicio2',
      component: ejercicio2
    },
    {
      path: '/lista',
      name: 'lista',
      component: lista
    },
    {
      path: '/editar',
      name: 'editar',
      component: editar
    }
  ]
})
