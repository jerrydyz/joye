<template>
  <div class="index">
    <img src="/static/images/index/index-banner.png" alt="" class="banner1">
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{width: 7.5rem;
  .banner1{width: 7.5rem;height: 4.38rem;}
}

</style>
