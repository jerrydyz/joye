<template>
  <div class="index">
    <img src="/static/images/index/index-banner.png" alt="" class="banner1">
    <img src="/static/images/index/steps.png" alt="" class="steps">
    <img src="/static/images/index/now-news.png" alt="" class="news">
    <img src="/static/images/index/jidi.png" alt="" class="jidi">
    
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
  .banner1{width: 100%;}
  .steps{width: 100%;}
  .news{width: 7.1rem;height: .58rem;display: block; margin: 0 auto;}
  .jidi{width: 7.1rem;height: 1.5rem;display: block; margin: 0 auto;}
}

</style>
