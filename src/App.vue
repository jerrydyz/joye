<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{position: fixed;font-size: .22rem;}
body{width: 7.5rem;margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 13rem;
}
*{
    -webkit-tap-highlight-color: transparent; 
 }
</style>
