<template>
  <div class="courses">
    <div>{{msg}}</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "courses",
  data() {
    return {
      msg: ""
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
  }
};
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
