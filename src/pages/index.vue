<template>
  <div class="index">
    <div class="top-banner">
      <div class="banner"></div>
    </div>
    <div class="news-box">
      <div class="news-tabber">
        <span v-for="(item,index) in newsTabs" :key="index" @click="tab(index)" :class="{active:tabState==index}">{{item.tabname}}</span>
      </div>
      <div class="news-content">
        <div class="news1" v-show="tabState==0"></div>
        <div class="news2" v-show="tabState==1"></div>
        <div class="news3" v-show="tabState==2"></div>
      </div>
    </div>
    <div>{{msg}}</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      newsTabs:[{id: "1",tabname:"新闻咨询"},{id: "2",tabname:"政策法规"},{id: "3",tabname:"工作动态"}],
      msg: 'index',
      tabState:0,
    }
  },
  methods:{
    tab(index){
      this.tabState=index;
    }

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.index{width: 7.5rem;
  .top-banner{width: 100%;height: 3.5rem;background-image: url(/static/images/index/index-banner.jpg);position: relative;
    .banner{width: 6.87rem;height: 2.54rem;background-image: url(/static/images/index/banner.png);position: absolute;left: 50%;bottom: 0;transform: translateX(-50%);}
  }
  .news-box{width: 100%;
    .news-tabber{width: 100%;display: flex;justify-content: space-around;font-size: .35rem;
      .active{border-bottom:2px solid #fb0000;}
    }
    .news-content{width: 100%;height: 5rem;
      div{width: 100%;height: 100%;}
      .news1{background-color: #000;}
      .news2{background-color: #ccc;}
      .news3{background-color: #fb0000;}
    }
  }
}

</style>
