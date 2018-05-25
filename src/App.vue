<template>
  <div id="app">  
    <router-link to="/ejercicio1">ejercicio</router-link>
     <router-link to="/ejercicio2">ejercicio2</router-link>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
