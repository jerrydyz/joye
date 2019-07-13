<template>
  <div class="tabbar">
    <ul>
      <li v-for="item in tabList" :key="item.id">
        <router-link :to="item.path" replace>
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabList: [
        { id: "1", name: "首页", path: "/index",icon:"iconfont  icon-home_light"},
        { id: "2", name: "课程中心", path: "/courses",icon:"iconfont icon-favor_light"},
        { id: "3", name: "资讯", path: "/news",icon:"iconfont icon-comment_light"},
        { id: "4", name: "我的", path: "/my",icon:"iconfont icon-my"}
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tabbar {
  position: absolute;left: 0;bottom: 0;width: 100%;height: 0.96rem;box-sizing:border-box;padding: 0 .2rem;
  ul {width: 100%;height: 100%;list-style-type: none;padding: 0;display:flex;justify-content:space-between;
    li {width: 1rem;height: 100%;
      .router-link-active{color:#e81d1b;}
      a{display:block;width: 100%;height: 100%;color:#3d1207;text-decoration: none;font-size: .2rem;
        i{display:block;text-align: center;}
        span{display:block;text-align: center;}
      }
    }
    
  }
}
.iconfont {font-size: .49rem;}
</style>
