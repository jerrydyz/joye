<template>
  <div class="courses">
    {{msg}}
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'courses',
  data () {
    return {
      msg: 'courses'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
}

</style>
