<template>
  <div class="main-container"><router-view v-if="show"></router-view></div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false,
      enterAnimated: "animated tada"
    };
  },
  mounted() {
    this.show = !this.show;
  },
  methods: {}
};
</script>

<style lang="scss" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
.pointer {
  cursor: pointer;
  &:hover {
    color: mediumslateblue;
  }
}
</style>
