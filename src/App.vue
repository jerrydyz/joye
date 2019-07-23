<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body{width: 7.5rem;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .24rem;
  color:#000;
}
*{  
    margin: 0;padding: 0;
    -webkit-tap-highlight-color: transparent; 
 }
</style>
