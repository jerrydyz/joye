<template>
  <div class="courses">
    <div class="courses-box">
      <div class="courses-item" v-for="item in courses" :key="item.vid" @click="course(item.vid)">{{item.title}}</div>
    </div>
    <div>{{msg}}</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "courses",
  data() {
    return {
      msg: "",
      courses:[{vid:"1",title:"视屏1"},{vid:"4",title:"视屏4"},{vid:"10",title:"视屏10"}]
    };
  },
  mounted() {
    this.$axios.post("https://www.easy-mock.com/mock/5d303349a6ecd97aa68d2ab7/example/test").then(response => {
        console.log(response.data.data.name);
        this.msg=response.data.data.name;
        
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods:{
    course(vId){
      console.log(vId)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.courses{width: 100%;
  .courses-box{width: 6.9rem;margin: 0 auto;
    .courses-item{width: 100%;height: 2.1rem; margin: .3rem auto 0;box-shadow: 0 0 .1rem #ccc;}
  }
}
</style>
