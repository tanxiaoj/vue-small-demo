<template>
  <div id="app">
    <router-link :to="{name: 'visit'}" class="visit-history">访问历史</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .visit-history {
    width: 50px;
    height: 50px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    position: absolute;
    right: 15px;
    bottom: 30px;
    border-radius: 50%;
    background-color: #ff7400;
  }
}
</style>
