<template>
  <div class="vxDemo">
      <h1>Vuex 简要说明</h1>
      <h2>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化</h2>
      <img src="https://vuex.vuejs.org/vuex.png" alt="">
      <h3>代码构成 Vuex主要有state,getter,mutation,action四大部分构成</h3>
      <ul>
          <li><a href="">state: 存放vuex数据的文件</a></li>
          <li><a href="">getters: 读取vuex数据的文件</a></li>
          <li><a href="">mutation: 更改state里面数据的唯一方法，无法直接调用mutation内部方法，需要commit('方法') </a></li>
          <li><a href="">action: Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。</a></li>
      </ul>
      <h3>详情点击列表查看</h3>
  </div>
</template>

<script>
export default {
  name: 'vxDemo',
  data () {
    return {
    }
  },
  computed: {

  },
  created () {

  },
  methods: {

  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .vxDemo {
      ul {
          list-style: none;
          li{
              font-size: 14px;
              width: 100%;
              float: left;
              margin: 10px 0;
              text-align: left;
              a {
                  color: blue;
                  text-decoration: none;
              }
          }
      }
      img{
          width: 100%;
      }
      h3 {
          float: left;
          margin-left: 40px;
      }
  }
</style>
