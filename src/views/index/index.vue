<template>
  <div class="main-container">
    <el-container class="pr">
      <el-header>我是头</el-header>
      <el-container :style="{'height':clientHeight+'px'}">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <h3>我是左边</h3>
        </el-aside>
        <el-main>我是右边</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientHeight: ""
    };
  },
  created() {
    this.clientHeight = document.documentElement.clientHeight - 60 * 2;
  },
  mounted() {
    window.onresize = function temp() {
      this.clientHeight = document.documentElement.clientHeight - 60 * 2;
      this.clientHeight < 300 ? (this.clientHeight = 300) : this.clientHeight;
      console.log(this.clientHeight);
      
    };
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: rgb(226, 226, 226);
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
